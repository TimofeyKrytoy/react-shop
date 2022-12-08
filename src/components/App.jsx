import React, { useMemo, useState } from 'react'
import { generateCards } from '../utils/generatecard'
import Card from './Card'
import './App.css'
import useFilter from '../hooks/useFilter'
import SearchBar from './SearchBar'
import MultiSelect from './MultiSelect'
import Sorts, { CARD_SORTERS } from './Sorts'
import RangeSelect from './RangeSelect'

function App() {
    const [card] = useState(generateCards(300))
    const [sortValue, setSortValue] = useState("default");
    const [filterFn, setFilter] = useFilter();
    const filteredCards = useMemo(() => {
        const sortingFn = CARD_SORTERS[sortValue] || (() => 0);
        return card.filter(filterFn).sort(sortingFn)
    }, [card, sortValue, filterFn])
    const setSearchValue = (searchValue) =>
        setFilter((current) => ({ ...current, search: (p) => p.name.toLowerCase().includes(searchValue.toLowerCase()) }))
    const setPriceFilter = (min, max) => {
        const lowerThan = max ? (p) => p.price <= max : () => true
        const greaterThan = min ? (p) => p.price >= min : () => true;
        setFilter((current) => ({ ...current, price: (p) => [lowerThan, greaterThan].every(f => f(p)) }))
    }
    const setColorFilter = (selectedOptions) =>
        setFilter((current) => ({ ...current, color: selectedOptions.size ? (p) => selectedOptions.has(p.color) : () => true }))
    const actualColors = useMemo(() => Array.from(new Set(card.map(e => e.color))), [card])

    return (
        <div className="main">
            <div className="main__wrapper">
                <div className="title">
                    <div className="title__wrapper">
                        <div className="header">
                            <h1>Lamoda</h1>
                        </div>
                        <div className="count__elem">
                            <p>Количество элементов {filteredCards.length}</p>
                        </div>
                        <div>
                            <SearchBar onChange={setSearchValue} />
                        </div>
                        <Sorts current={sortValue} onSelect={setSortValue} />
                    </div>
                </div>
                <div className="sort__card">
                    <div>
                        <h3>Цвет</h3>
                        <MultiSelect onSelect={setColorFilter} options={actualColors} />
                        <h3>Цена</h3>
                        <RangeSelect onSelect={setPriceFilter} />
                    </div>
                    <div className="cards">
                        {filteredCards.map((card) => (
                            <Card
                                key={card.id}
                                {...card}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
