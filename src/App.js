import Search from "./components/Search";
import Table from "./components/Table";
import "./index.css";
import { getLiteratureData } from "./utils";

function App() {
  const listOfLiterature = getLiteratureData();

  return (
    <div className="App">
      <header className="p-4 text-center">
        <h1 className="text-4xl font-bold">
          <a
            href="https://www.youtube.com/c/Wohlstandf%C3%BCrAlle/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="underline focus:outline-none hover:text-blue-800 focus:text-blue-800"
          >
            Wohlstand für alle
          </a>
        </h1>
        <h2 className="text-xl">List of Literature</h2>
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
  );
}

export default App;
