import { useState } from "react";

export default function MultiSelect({ options, onSelect }) {
  const [selectedOptions, setSelectedOptions] = useState(new Set());

  const handleSelect = ({ target: { name } }) => {
    selectedOptions.has(name)
      ? selectedOptions.delete(name)
      : selectedOptions.add(name);

    const newSet = new Set([...selectedOptions]);
    setSelectedOptions(newSet);
    onSelect(newSet);
  };

  return (
    <div className="text-xl">
      {options.map((option) => (
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={selectedOptions.has(option)}
            name={option}
            onChange={handleSelect}
          />
          {option}
        </div>
      ))}
    </div>
  );
}
