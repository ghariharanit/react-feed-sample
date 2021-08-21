import React from 'react'

const SortBy = ({ value, onChange }) => {
    return (
        <select value={value} name="sort-by" onChange={(e) => { onChange(e.target.value) }}>
            <option value=""></option>
            <option value="title">Title</option>
            <option value="dateLastEditedTimeStamp">Date Last Edited</option>
        </select>
    )
}

export default SortBy