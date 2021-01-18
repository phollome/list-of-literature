import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Search from "./components/Search";
import Table from "./components/Table";
import "./index.css";
import "./i18n";
import LanguageSwitch from "./components/LanguageSwitch";
import { useReferences } from "./hooks";

function App(props) {
  const { dataId } = props;

  const { title, link, references } = useReferences(dataId);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("listOfLiterature")} - ${title}`;
  }, [t, title]);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900">
      <div className="m-auto min-w-min max-w-7xl text-gray-900 dark:text-gray-300">
        <header className="p-4 text-center">
          <div className="text-right">
            <LanguageSwitch />
          </div>
          <h1 className="text-4xl font-bold">{t("listOfLiterature")}</h1>
          <h2 className="text-xl">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline focus:outline-none hover:text-blue-800 focus:text-blue-800 dark:hover:text-blue-400 dark:focus:text-blue-400"
            >
              {title}
            </a>
          </h2>
        </header>
        <main>
          <Search>
            <Table
              data={references}
              columns={["author", "title", "publisher", "episodeTitle"]}
            />
          </Search>
        </main>
        <footer>Footer</footer>
      </div>
    </div>
  );
}

export default App;
