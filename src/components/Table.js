import { useEffect, useRef, useState } from "react";
import Fuse from "fuse.js";

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
  const { data, columns = getColumns(data), searchString = "" } = props;
  const [sortKey, setSortKey] = useState();
  const [sortType, setSortType] = useState();
  const [sortedData, setSortedData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const fuse = useRef(null);

  useEffect(() => {
    setSortType(SortTypes.Descending);
  }, [sortKey]);

  useEffect(() => {
    if (sortKey === undefined) {
      setSortedData([...searchResult]);
    } else {
      setSortedData(
        [...searchResult].sort((a, b) =>
          sortType === SortTypes.Descending
            ? a[sortKey].localeCompare(b[sortKey])
            : b[sortKey].localeCompare(a[sortKey])
        )
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
    if (searchString.length > 2 && fuse.current !== null && data.length > 0) {
      const result = fuse.current.search(searchString);
      setSearchResult([...result.map((elem) => elem.item)]);
    } else if (searchResult.length !== data.length) {
      setSearchResult([...data]);
    }
  }, [searchString, data]); // eslint-disable-line

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
    <table>
      <thead>
        <tr>
          {columns.map((key, idx) => {
            let content = key;
            if (sortKey === key) {
              if (sortType === SortTypes.Descending) {
                content += "⬆";
              } else {
                content += "⬇";
              }
            }
            return (
              <th
                key={idx}
                style={{ cursor: "pointer" }}
                onClick={() => handleColumnSelect(key)}
              >
                {content}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, idx) => {
          return (
            <tr key={idx}>
              {columns.map((column, i) => {
                return <td key={i}>{item[column]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
