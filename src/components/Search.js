import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Search(props) {
  const { children } = props;
  const [value, setValue] = useState();
  const { t } = useTranslation();

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
      <label className="flex m-2 p-2 overflow-hidden" htmlFor="search">
        <p className="mr-2">{t("search")}</p>
        <input
          className="w-full border-b-2 bg-transparent focus:outline-none focus:border-blue-800 dark:border-gray-600 dark:focus:border-blue-400"
          id="search"
          type="text"
          autoComplete="off"
          onChange={handleChange}
        />
      </label>
      {elements}
    </>
  );
}

export default Search;
