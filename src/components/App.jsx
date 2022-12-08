import React, { useMemo, useState } from "react";
import { generateCards } from "../utils/generatecard";
import Card from "./Card";
import useFilter from "../hooks/useFilter";
import SearchBar from "./SearchBar";
import MultiSelect from "./MultiSelect";
import Sorts, { CARD_SORTERS } from "./Sorts";
import RangeSelect from "./RangeSelect";

function App() {
  const [card] = useState(generateCards(300));
  const [sortValue, setSortValue] = useState("default");
  const [filterFn, setFilter] = useFilter();
  const filteredCards = useMemo(() => {
    const sortingFn = CARD_SORTERS[sortValue] || (() => 0);
    return card.filter(filterFn).sort(sortingFn);
  }, [card, sortValue, filterFn]);
  const setSearchValue = (searchValue) =>
    setFilter((current) => ({
      ...current,
      search: (p) => p.name.toLowerCase().includes(searchValue.toLowerCase()),
    }));
  const setPriceFilter = (min, max) => {
    const lowerThan = max ? (p) => p.price <= max : () => true;
    const greaterThan = min ? (p) => p.price >= min : () => true;
    setFilter((current) => ({
      ...current,
      price: (p) => [lowerThan, greaterThan].every((f) => f(p)),
    }));
  };
  const setColorFilter = (selectedOptions) =>
    setFilter((current) => ({
      ...current,
      color: selectedOptions.size
        ? (p) => selectedOptions.has(p.color)
        : () => true,
    }));
  const actualColors = useMemo(
    () => Array.from(new Set(card.map((e) => e.color))),
    [card]
  );

  return (
    <div className="flex flex-col gap-3 mx-4 sm:mx-8 md:mx-12">
      <div className="title">
        <div className="flex flex-col gap-3">
          <div className="header">
            <h1 className="text-4xl font-bold">Lamoda</h1>
          </div>
          <div className="text-2xl">
            <p>
              Количество элементов:{" "}
              <span className="text-gray-500"> {filteredCards.length} </span>
            </p>
          </div>
          <div>
            <SearchBar onChange={setSearchValue} />
          </div>
          <Sorts current={sortValue} onSelect={setSortValue} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="">
          <div className="border-2 p-2 rounded-md">
            <h3 className="font-semibold text-2xl">Цвет</h3>
            <MultiSelect onSelect={setColorFilter} options={actualColors} />
            <h3 className="font-semibold text-2xl">Цена</h3>
            <RangeSelect onSelect={setPriceFilter} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {filteredCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
