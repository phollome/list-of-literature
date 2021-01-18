import data from "./data.json";

export function getLiteratureData() {
  const { title, link, episodes } = data[0];
  // create list of literature
  const list = episodes.reduce((arr, episode) => {
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
  return { title, link, list };
}
