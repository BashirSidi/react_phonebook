import React from 'react'

const Filter = ({ inputType, filterString, handleFilterValueChange }) => {
    return (
        <div>
            filter shown with
            <input
                type={inputType}
                value={filterString}
                onChange={handleFilterValueChange}
            />
        </div>
    )
}

export default Filter
