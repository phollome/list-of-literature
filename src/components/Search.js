import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Search(props) {
  const { fields = [], children } = props;
  const [value, setValue] = useState();
  const { t } = useTranslation();

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const elements =
    children &&
    React.Children.toArray(children).map((child, idx, arr) =>
      React.cloneElement(child, {
        filterString: value,
      })
    );

  const placeholder = fields.map((item) => t(item)).join(", ");

  return (
    <>
      <label className="flex m-2 p-2 overflow-hidden" htmlFor="filter">
        <p className="mr-2">{t("filter")}</p>
        <input
          className="w-full border-b-2 bg-transparent focus:outline-none focus:border-blue-800 dark:border-gray-600 dark:focus:border-blue-400 placeholder-gray-300 dark:placeholder-gray-600"
          id="filter"
          type="text"
          placeholder={placeholder}
          autoComplete="off"
          onChange={handleChange}
        />
      </label>
      {elements}
    </>
  );
}

export default Search;
