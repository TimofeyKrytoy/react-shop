import React, { useState } from 'react'

const SearchBar = ({ onChange }) => {
    const [value, setValue] = useState('')
    const handleChange = ({ target }) => {
        setValue(target.value)
        onChange(target.value)
    }
    return (
        <input value={value} onChange={handleChange} placeholder="Введите название товара" />
    )
}

export default SearchBar