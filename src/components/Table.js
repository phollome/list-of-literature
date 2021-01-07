import { useEffect, useState } from "react";

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
  const { data, columns = getColumns(data) } = props;
  const [sortKey, setSortKey] = useState();
  const [sortType, setSortType] = useState();
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    setSortType(SortTypes.Descending);
  }, [sortKey]);

  useEffect(() => {
    if (sortKey === undefined) {
      setSortedData([...data]);
    } else {
      setSortedData(
        [...data].sort((a, b) =>
          sortType === SortTypes.Descending
            ? a[sortKey].localeCompare(b[sortKey])
            : b[sortKey].localeCompare(a[sortKey])
        )
      );
    }
  }, [data, sortKey, sortType]);

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
