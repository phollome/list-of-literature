import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      listOfLiterature: "List of Literature",
      search: "Search",
      author: "Author",
      title: "Title",
      publisher: "Publisher",
      episodeTitle: "Episode title",
    },
  },
  de: {
    translation: {
      listOfLiterature: "Literaturverzeichnis",
      search: "Suche",
      author: "Autor:innen",
      title: "Titel",
      publisher: "Verlage",
      episodeTitle: "Episodentitel",
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