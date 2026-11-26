import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {
  PageTitle,
  PageDescription,
  Section,
  PrimaryLink,
} from "./PageElements";

const Layout = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 0;
  > div {
    background: ${({ theme }) => theme.primaryDark};
    padding: clamp(24px, 4vw, 60px);
  }
  > div p {
    color: inherit;
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
const Form = styled.form`
  padding: clamp(18px, 3vw, 32px);
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  label {
    display: grid;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
  }
  input,
  textarea {
    width: 100%;
    min-width: 0;
    background: ${({ theme }) => theme.bg};
    color: inherit;
    border: 1px solid ${({ theme }) => theme.text_secondary + "66"};
    border-radius: 6px;
    padding: 12px;
    font: inherit;
    font-size: 16px;
  }
  textarea {
    resize: vertical;
  }
  p a {
    color: ${({ theme }) => theme.accent};
    text-underline-offset: 3px;
  }
  .wide,
  button,
  p {
    grid-column: 1/-1;
  }
  button {
    justify-self: start;
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;
export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [fallbackEmail, setFallbackEmail] = useState("");
  const sending = useRef(false);
  async function submit(e) {
    e.preventDefault();
    if (sending.current) return;
    const form = e.currentTarget;
    const { from_email, from_name, subject, message, draft } = form.elements;
    message.value = `From: ${from_name.value} <${from_email.value}>\nSubject: ${subject.value}\n\n${draft.value}`;
    sending.current = true;
    setFallbackEmail("");
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_cku2fro",
        "template_fvozc75",
        form,
        "JsSFctxqulb_K6QQw",
      );
      form.reset();
      setStatus("sent");
    } catch {
      const emailBody = `Name: ${from_name.value}\nEmail: ${from_email.value}\n\n${draft.value}`;
      setFallbackEmail(
        `mailto:hack_kshetra@vvce.ac.in?subject=${encodeURIComponent(
          subject.value,
        )}&body=${encodeURIComponent(emailBody)}`,
      );
      setStatus("failed");
    } finally {
      sending.current = false;
    }
  }
  return (
    <Layout>
      <div>
        <PageTitle>Contact</PageTitle>
        <PageDescription>
          Have a question about HACKKSHETRA 3.0 or interested in sponsoring the
          event? Get in touch with our team.
        </PageDescription>
      </div>
      <Form
        onSubmit={submit}
        onChange={() => {
          if (status !== "sending") {
            setFallbackEmail("");
            setStatus("idle");
          }
        }}
      >
        <label>
          Your name
          <input
            name="from_name"
            autoComplete="name"
            required
            readOnly={status === "sending"}
          />
        </label>
        <label>
          Email address
          <input
            name="from_email"
            type="email"
            autoComplete="email"
            required
            readOnly={status === "sending"}
          />
        </label>
        <label className="wide">
          Subject
          <input name="subject" required readOnly={status === "sending"} />
        </label>
        <label className="wide">
          Message
          <textarea
            id="draft"
            rows={5}
            required
            readOnly={status === "sending"}
          />
        </label>
        <input
          type="hidden"
          name="to_email"
          value="hack_kshetra@vvce.ac.in"
        />
        <input type="hidden" name="message" />
        <PrimaryLink as="button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </PrimaryLink>
        <p role="status">
          {status === "sent"
            ? "Your message has been sent."
            : status === "failed"
              ? (
                <>
                  Email delivery is temporarily unavailable.{" "}
                  <a href={fallbackEmail}>Open a prefilled email draft</a> to
                  send your message directly.
                </>
              )
              : ""}
        </p>
      </Form>
    </Layout>
  );
}
