import React, { useState } from "react";

export default function Input({ id, name, value, setEntries, entryId }) {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);

        if(name === 'display_ini') {
            setEntries((prevEntries) =>
                prevEntries.map((entry) =>
                    entry.id === entryId ? {...entry, ini: newValue} : entry
                )
            );
        }

    };

    return (
        <input
            type="text"
            id={id}
            name={name}
            value={inputValue}
            onChange={handleInputChange}
        />
    );
}
