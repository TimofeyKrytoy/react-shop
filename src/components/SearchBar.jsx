import React, { useState } from "react";

const SearchBar = ({ onChange }) => {
  const [value, setValue] = useState("");
  const handleChange = ({ target }) => {
    setValue(target.value);
    onChange(target.value);
  };
  return (
    <input
      value={value}
      onChange={handleChange}
      placeholder="Введите название товара"
      className="border-2 px-2 py-1 min-w-xs"
    />
  );
};

export default SearchBar;
