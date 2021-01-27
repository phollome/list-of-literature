import { useEffect, useRef, useState } from "react";
import Fuse from "fuse.js";
import { useTranslation } from "react-i18next";

function getColumns(data) {
  return data.reduce((arr, item) => {
    const newKeys = Object.keys(item).filter((key) => !arr.includes(key));
    return arr.concat(newKeys);
  }, []);
}

const SortTypes = {
  Descending: 1,
  Ascending: -1,
};

function Table(props) {
  const { data, columns = getColumns(data), filterString = "" } = props;
  const [sortKey, setSortKey] = useState();
  const [sortType, setSortType] = useState();
  const [sortedData, setSortedData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const fuse = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    setSortType(SortTypes.Descending);
  }, [sortKey]);

  useEffect(() => {
    if (sortKey === undefined) {
      setSortedData([...searchResult]);
    } else {
      setSortedData(
        [...searchResult].sort((a, b) => {
          const aContent = a[sortKey] || "";
          const bContent = b[sortKey] || "";
          return sortType === SortTypes.Descending
            ? aContent.localeCompare(bContent)
            : bContent.localeCompare(aContent);
        })
      );
    }
  }, [searchResult, sortKey, sortType]);

  useEffect(() => {
    if (data.length > 0) {
      fuse.current = new Fuse(data, {
        keys: columns,
        minMatchCharLength: 2,
      });
    }
  }, [data, columns]);

  useEffect(() => {
    if (filterString.length > 2 && fuse.current !== null && data.length > 0) {
      const result = fuse.current.search(filterString);
      setSearchResult([...result.map((elem) => elem.item)]);
    } else if (searchResult.length !== data.length) {
      setSearchResult([...data]);
    }
  }, [filterString, data]); // eslint-disable-line

  const handleColumnSelect = (key) => {
    if (key !== sortKey) {
      setSortKey(key);
      setSortType(SortTypes.Descending);
    } else {
      sortType === SortTypes.Descending
        ? setSortType(SortTypes.Ascending)
        : setSortKey(undefined);
    }
  };

  return (
    <table className="w-full p-2 border-2 dark:border-gray-600">
      <thead>
        <tr className="border dark:border-gray-600">
          {columns.map((key, idx) => {
            let content = t(key);
            if (sortKey === key) {
              if (sortType === SortTypes.Descending) {
                content += " ⬆";
              } else {
                content += " ⬇";
              }
            }
            return (
              <th
                key={idx}
                onClick={() => handleColumnSelect(key)}
                className="w-1/4 p-1"
              >
                <button
                  type="button"
                  className="cursor-pointer font-bold focus:outline-none hover:text-blue-800 focus:text-blue-800 dark:hover:text-blue-400 dark:focus:text-blue-400"
                >
                  {content}
                </button>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, idx) => {
          return (
            <tr
              key={idx}
              className="border odd:bg-gray-100 dark:odd:bg-gray-800 dark:border-gray-600"
            >
              {columns.map((column, i) => {
                const hasLink = column === "title" && item.link !== undefined;
                return (
                  <td key={`${idx}-${i}`} className="p-1">
                    {hasLink ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline focus:outline-none hover:text-blue-800 focus:text-blue-800 dark:hover:text-blue-400 dark:focus:text-blue-400 inline-block"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item[column]
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
