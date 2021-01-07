function getColumns(data) {
  return data.reduce((arr, item) => {
    const newKeys = Object.keys(item).filter((key) => !arr.includes(key));
    return arr.concat(newKeys);
  }, []);
}

function Table(props) {
  const { data, columns = getColumns(data) } = props;
  return (
    <table>
      <thead>
        <tr>
          {columns.map((key, idx) => (
            <th key={idx}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              {columns.map((column) => {
                return <td>{item[column]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
