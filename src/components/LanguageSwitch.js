import { useTranslation } from "react-i18next";

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const language = i18n.language || "en";

  const handleLanguageSwitch = () => {
    i18n.changeLanguage(language === "en" ? "de" : "en");
  };

  return (
    <button
      data-testId="language-switch"
      type="button"
      className="focus:outline-none focus:underline hover:underline"
      onClick={handleLanguageSwitch}
    >
      {language === "en" ? "🇬🇧" : "🇩🇪"}
    </button>
  );
}

export default LanguageSwitch;
