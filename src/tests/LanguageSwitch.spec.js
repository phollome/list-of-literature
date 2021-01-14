import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import LanguageSwitch from "../components/LanguageSwitch";

test("change language flag by clicking language switch", () => {
  render(<LanguageSwitch />);
  const button = screen.getByTestId("language-switch");
  expect(button.textContent).toBe("🇬🇧");
  user.click(button);
  expect(button.textContent).toBe("🇩🇪");
  user.click(button);
  expect(button.textContent).toBe("🇬🇧");
});
