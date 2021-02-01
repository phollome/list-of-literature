import { useTranslation } from "react-i18next";
import { useDarkMode } from "@phollome/react-hooks";

function DarkModeSwitch() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { t } = useTranslation();

  const handleDarkModeSwitch = () => {
    toggleDarkMode();
  };

  return (
    <button
      data-testid="language-switch"
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
