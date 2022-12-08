import { useState } from "react"

export default function MultiSelect({ options, onSelect }) {
    const [selectedOptions, setSelectedOptions] = useState(new Set())

    const handleSelect = ({ target: { name } }) => {
        selectedOptions.has(name) ? selectedOptions.delete(name) : selectedOptions.add(name)

        const newSet = new Set([...selectedOptions])
        setSelectedOptions(newSet)
        onSelect(newSet)
    }

    return (
        <div>
            {options.map((option) => (
                <div>
                    <input type="checkbox" checked={selectedOptions.has(option)} name={option} onChange={handleSelect} />
                    {option}
                </div>
            ))}
        </div>
    )
}