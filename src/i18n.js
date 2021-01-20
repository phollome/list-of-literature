import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      listOfLiterature: "List of Literature",
      search: "Search",
      author: "Authors",
      title: "Title",
      publisher: "Publisher/Source",
      episodeTitle: "Episode title",
      switchLanguage: "Switch language",
      toggleDarkMode: "Toggle dark mode",
      imprint: "Imprint"
    },
  },
  de: {
    translation: {
      listOfLiterature: "Literaturverzeichnis",
      search: "Suche",
      author: "Autor:innen",
      title: "Titel",
      publisher: "Verlage/Quelle",
      episodeTitle: "Episodentitel",
      switchLanguage: "Sprache wechseln",
      toggleDarkMode: "Dark Mode an-/ausschalten",
      imprint: "Impressum"
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
