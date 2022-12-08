import React, { useState } from 'react'

const RangeSelect = ({ onSelect }) => {
    const [value, setValue] = useState({})
    const handleSelect = ({ target }) => {
        const { min, max } = {
            ...value,
            [target.name]: target.value
        }
        setValue({ min, max })
        onSelect(min, max)
    }
    return (
        <div className='range-select'>
            <input type="number" value={value.min} onChange={handleSelect} name="min" />
            -
            <input type="number" value={value.max} onChange={handleSelect} name="max" />
        </div>
    )
}

export default RangeSelect