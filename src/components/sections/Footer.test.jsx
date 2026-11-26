import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./Footer";
import { darkTheme } from "../../utils/Themes";

test("provides query email and student coordinator details", () => {
  render(
    <ThemeProvider theme={darkTheme}>
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    </ThemeProvider>,
  );

  expect(
    screen.getByRole("link", { name: "hack_kshetra@vvce.ac.in" }).getAttribute("href"),
  ).toBe("mailto:hack_kshetra@vvce.ac.in");
  expect(
    screen.getByRole("link", { name: "student coordinators" }).getAttribute("href"),
  ).toBe("/team");
});
