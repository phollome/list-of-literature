import { useTranslation } from "react-i18next";

function LanguageSwitch() {
  const { i18n, t } = useTranslation();

  const handleLanguageSwitch = (lang) => {
    i18n.changeLanguage(lang === "en" ? "de" : "en");
  };

  const language =
    i18n.language === "en" || i18n.language.startsWith("en-") ? "en" : "de";

  return (
    <button
      data-testid="language-switch"
      aria-label={t("switchLanguage")}
      type="button"
      className="focus:outline-none focus:underline hover:underline"
      onClick={() => handleLanguageSwitch(language)}
    >
      {language === "en" ? "🇬🇧" : "🇩🇪"}
    </button>
  );
}

export default LanguageSwitch;
