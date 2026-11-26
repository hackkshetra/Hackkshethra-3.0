import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import emailjs from "@emailjs/browser";
import Contact from "./Contact";

jest.mock("@emailjs/browser", () => ({ sendForm: jest.fn() }));

test("sends to the event mailbox and retains the draft for retry", async () => {
  const sent = [];
  emailjs.sendForm.mockImplementation(async (_service, _template, form) => {
    const data = new FormData(form);
    sent.push({
      message: data.get("message"),
      recipient: data.get("to_email"),
    });
    if (sent.length === 1) throw Error("offline");
  });
  render(<Contact />);
  for (const [label, value] of [
    ["Your name", "Asha"],
    ["Email address", "asha@example.org"],
    ["Subject", "Teams"],
    ["Message", "Can we enter?"],
  ]) {
    fireEvent.change(screen.getByLabelText(label), { target: { value } });
  }
  fireEvent.click(screen.getByRole("button"));
  await screen.findByText(/Email delivery is temporarily unavailable/);
  const fallbackEmail = screen.getByRole("link", {
    name: "Open a prefilled email draft",
  });
  const fallbackUrl = new URL(fallbackEmail.href);
  expect(fallbackUrl.protocol).toBe("mailto:");
  expect(fallbackUrl.pathname).toBe("hack_kshetra@vvce.ac.in");
  expect(fallbackUrl.searchParams.get("subject")).toBe("Teams");
  expect(fallbackUrl.searchParams.get("body")).toBe(
    "Name: Asha\nEmail: asha@example.org\n\nCan we enter?",
  );
  expect(screen.getByLabelText("Message").value).toBe("Can we enter?");
  fireEvent.click(screen.getByRole("button"));
  await waitFor(() =>
    expect(screen.getByRole("status").textContent).toBe(
      "Your message has been sent.",
    ),
  );
  expect(sent).toEqual(
    Array(2).fill({
      message: "From: Asha <asha@example.org>\nSubject: Teams\n\nCan we enter?",
      recipient: "hack_kshetra@vvce.ac.in",
    }),
  );
  expect(screen.getByLabelText("Message").value).toBe("");
});
