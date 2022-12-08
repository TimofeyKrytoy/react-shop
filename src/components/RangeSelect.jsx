import React, { useState } from "react";

const RangeSelect = ({ onSelect }) => {
  const [value, setValue] = useState({});
  const handleSelect = ({ target }) => {
    const { min, max } = {
      ...value,
      [target.name]: target.value,
    };
    setValue({ min, max });
    onSelect(min, max);
  };
  return (
    <div className="flex gap-1 items-center">
      <input
        type="number"
        value={value.min}
        onChange={handleSelect}
        name="min"
        className="border-2 py-1 px-2 max-w-[100px]"
      />
      -
      <input
        type="number"
        value={value.max}
        onChange={handleSelect}
        name="max"
        className="border-2 py-1 px-2 max-w-[100px]"
      />
    </div>
  );
};

export default RangeSelect;
