import React from 'react'
import './style.scss'
const SortBy = ({ value, onChange }) => {
    return (
        <div>
            <select value={value} name="sort-by" onChange={(e) => { onChange(e.target.value) }}>
                <option value=""></option>
                <option value="title">Title</option>
                <option value="dateLastEditedTimeStamp">Date Last Edited</option>
            </select>
        </div>
    )
}

export default SortBy