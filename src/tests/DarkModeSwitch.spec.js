import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import DarkModeSwitch from "../components/DarkModeSwitch";

test("change dark mode icon by clicking dark mode switch", () => {
  render(<DarkModeSwitch />);
  const button = screen.getByTestId("dark-mode-switch");
  expect(button.textContent).toBe("🌞");
  user.click(button);
  expect(button.textContent).toBe("🌚");
  user.click(button);
  expect(button.textContent).toBe("🌞");
});
