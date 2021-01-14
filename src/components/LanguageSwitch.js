import { useTranslation } from "react-i18next";

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const handleLanguageSwitch = () => {
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  };

  return (
    <button
      type="button"
      className="focus:outline-none focus:underline hover:underline"
      onClick={handleLanguageSwitch}
    >
      {i18n.language === "en" ? "🇬🇧" : "🇩🇪"}
    </button>
  );
}

export default LanguageSwitch;
