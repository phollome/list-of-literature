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
      <div className="flex m-2 p-2 overflow-hidden">
        <label className="mr-2" htmlFor="search">
          search
        </label>
        <input
          className="w-full border-b-2 bg-transparent focus:outline-none focus:border-blue-800 dark:border-gray-600 dark:focus:border-blue-400"
          id="search"
          type="text"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      {elements}
    </>
  );
}

export default Search;
