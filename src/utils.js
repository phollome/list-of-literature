import data from "./data.json";

export function getLiteratureData() {
  // create list of literature
  const list = data.reduce((arr, episode) => {
    const {
      id: episodeId,
      title: episodeTitle,
      pubDate: episodePubDate,
      literature,
    } = episode;
    const enhancedLiterature = literature.map((item) => ({
      episodeId,
      episodeTitle,
      episodePubDate,
      ...item,
    }));
    return arr.concat(enhancedLiterature);
  }, []);
  return list;
}
