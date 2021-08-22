import React from 'react'
import PropTypes from 'prop-types'
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

SortBy.prototype = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SortBy