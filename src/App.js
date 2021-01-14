import Search from "./components/Search";
import Table from "./components/Table";
import "./index.css";
import { getLiteratureData } from "./utils";

function App() {
  const listOfLiterature = getLiteratureData();

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <a
            href="https://www.youtube.com/c/Wohlstandf%C3%BCrAlle/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wohlstand für alle
          </a>
        </h1>
        <h2>List of Literature</h2>
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
