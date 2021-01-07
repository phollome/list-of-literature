import "./styles.css";
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
        <ul>
          {listOfLiterature.map((item) => {
            const {
              author,
              title,
              publisher,
              episodeTitle,
              episodePubDate,
            } = item;
            return (
              <li>
                {author}
                <br />
                {title}
                <br />
                {publisher}
                <br />
                mentioned in "{episodeTitle}" on{" "}
                {new Date(episodePubDate).toLocaleDateString()}
              </li>
            );
          })}
        </ul>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
