import { useEffect, useState } from "react";
import data from "./data.json";

export function useReferences(dataId) {
  const { title = "", link = "", episodes = [] } =
    (dataId !== undefined
      ? data.find((item) => item.id === dataId)
      : data[0]) || {};
  // create list of literature
  const references = episodes.reduce((arr, episode) => {
    const {
      id: episodeId,
      title: episodeTitle,
      pubDate: episodePubDate,
      references = [],
    } = episode;
    const enhancedLiterature = references.map((item) => ({
      episodeId,
      episodeTitle,
      episodePubDate,
      ...item,
    }));
    return arr.concat(enhancedLiterature);
  }, []);
  return { title, link, references };
}

export function useDarkMode() {
  const selector = "body";
  const className = "dark";
  const localStorageItemKey = "darkModeEnabled";

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled =
      window && window.localStorage && window.localStorage[localStorageItemKey];
    if (darkModeEnabled) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(
        (window &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches) ||
          false
      );
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector(selector).classList.add(className);
      window &&
        window.localStorage &&
        window.localStorage.setItem(localStorageItemKey, true);
    } else {
      document.querySelector(selector).classList.remove(className);
      window &&
        window.localStorage &&
        window.localStorage.removeItem(localStorageItemKey);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
}
