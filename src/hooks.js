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
      href: episodeLink,
      references = [],
    } = episode;
    const enhancedLiterature = references.map((item) => ({
      episodeId,
      episodeTitle,
      episodePubDate,
      episodeLink,
      ...item,
    }));
    return arr.concat(enhancedLiterature);
  }, []);
  return { title, link, references };
}
