import { useTranslation } from "react-i18next";
import { useDarkMode } from "../hooks";

function DarkModeSwitch() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { t } = useTranslation();

  const handleDarkModeSwitch = () => {
    toggleDarkMode();
  };

  return (
    <button
      data-testid="dark-mode-switch"
      aria-label={t("toggleDarkMode")}
      type="button"
      className="focus:outline-none focus:underline hover:underline"
      onClick={() => handleDarkModeSwitch()}
    >
      {isDarkMode ? "🌚" : "🌞"}
    </button>
  );
}

export default DarkModeSwitch;
