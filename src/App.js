import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Search from "./components/Search";
import Table from "./components/Table";
import "./index.css";
import "./i18n";
import DarkModeSwitch from "./components/DarkModeSwitch";
import LanguageSwitch from "./components/LanguageSwitch";
import { useReferences } from "./hooks";

function App(props) {
  const { dataId, mail, imprint } = props;

  const { title, link, references } = useReferences(dataId);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("listOfLiterature")} - ${title}`;
  }, [t, title]);

  const columns = ["author", "title", "publisher", "episodeTitle"];

  return (
    <div className="min-w-min min-h-screen bg-white dark:bg-gray-900">
      <div className="m-auto min-w-min max-w-7xl text-gray-900 dark:text-gray-300">
        <header className="p-4 text-center">
          <div className="text-right">
            <span className="mr-4">
              <LanguageSwitch />
            </span>
            <DarkModeSwitch />
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
        <main className="m-2">
          <Search fields={columns}>
            <Table data={references} columns={columns} />
          </Search>
        </main>
        <footer className="py-2 text-center">
          {mail !== undefined ? (
            <>
              <span className="mr-2" aria-label="mail icon">
                ✉
              </span>
              <a
                href={`mailto:${mail}`}
                className="underline focus:outline-none hover:text-blue-800 focus:text-blue-800 dark:hover:text-blue-400 dark:focus:text-blue-400"
              >
                Webmaster
              </a>
            </>
          ) : null}
          {imprint !== undefined ? (
            <>
              <a
                href={imprint}
                target="_blank"
                rel="noopener noreferrer"
                className="underline focus:outline-none hover:text-blue-800 focus:text-blue-800 dark:hover:text-blue-400 dark:focus:text-blue-400"
              >
                {t("imprint")}
              </a>
            </>
          ) : null}
        </footer>
      </div>
    </div>
  );
}

export default App;
