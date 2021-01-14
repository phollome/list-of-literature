import { useTranslation } from "react-i18next";
import Search from "./components/Search";
import Table from "./components/Table";
import "./index.css";
import "./i18n";
import { getLiteratureData } from "./utils";
import LanguageSwitch from "./components/LanguageSwitch";

function App() {
  const { t } = useTranslation();

  const listOfLiterature = getLiteratureData();

  return (
    <div className="w-full bg-white dark:bg-gray-900">
      <div className="m-auto min-w-min max-w-7xl text-gray-900 dark:text-gray-300">
        <header className="p-4 text-center">
          <div className="text-right">
            <LanguageSwitch />
          </div>
          <h1 className="text-4xl font-bold">
            <a
              href="https://www.youtube.com/c/Wohlstandf%C3%BCrAlle/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="underline focus:outline-none hover:text-blue-800 focus:text-blue-800 dark:hover:text-blue-400 dark:focus:text-blue-400"
            >
              Wohlstand für alle
            </a>
          </h1>
          <h2 className="text-xl">{t("listOfLiterature")}</h2>
        </header>
        <main>
          <Search>
            <Table
              data={listOfLiterature}
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
