import React from "react";
export const CARD_SORTERS = {
  "Сначала популярные": (p1, p2) => p2.rating - p1.rating,
  "Cначала дорогие": (p1, p2) => p2.price - p1.price,
  "Сначала дешевые": (p1, p2) => p1.price - p2.price,
};
const Sorts = ({ current, onSelect }) => {
  const handleSelect = (e) => {
    current === e.target.name ? onSelect("default") : onSelect(e.target.name);
  };
  return (
    <div className="flex gap-2 flex-wrap">
      {Object.keys(CARD_SORTERS).map((key, i) => (
        <button
          onClick={handleSelect}
          key={i}
          className={
            key === current
              ? "border-2 px-2 py-1 border-blue-500"
              : "border-2 px-2 py-1"
          }
          name={key}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Sorts;
