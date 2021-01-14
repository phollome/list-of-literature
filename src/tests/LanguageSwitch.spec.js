import { render, screen } from "@testing-library/react";
import LanguageSwitch from "../components/LanguageSwitch";

test("render Language Switch with default", () => {
  render(<LanguageSwitch />);
  const button = screen.getByTestId("language-switch");
  expect(button.textContent).toBe("🇬🇧");
});
