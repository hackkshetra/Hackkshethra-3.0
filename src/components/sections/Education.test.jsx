import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Education from "./Education";
import { darkTheme } from "../../utils/Themes";

test("shows the advertised total prize pool and podium prizes", () => {
  render(
    <ThemeProvider theme={darkTheme}>
      <Education />
    </ThemeProvider>,
  );

  expect(screen.getByText("₹70,000+")).toBeTruthy();
  expect(screen.getByText("₹10,000")).toBeTruthy();
});
