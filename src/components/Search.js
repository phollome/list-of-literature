import React, { useState } from "react";

function Search(props) {
  const { children } = props;
  const [value, setValue] = useState();

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const elements =
    children &&
    React.Children.toArray(children).map((child, idx, arr) =>
      React.cloneElement(child, {
        searchString: value,
      })
    );

  return (
    <>
      <label htmlFor="search">search: </label>
      <input
        onChange={handleChange}
        id="search"
        type="text"
        autoComplete="off"
      />
      {elements}
    </>
  );
}

export default Search;
