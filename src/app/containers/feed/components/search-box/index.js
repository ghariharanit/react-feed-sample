import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import InputBox from '../../../../components/input-box'
const SearchBox = ({ value, onChange }) => {
    return (
        <div>
            <InputBox placeholder="Search" value={value} type="search" others={{}} onChange={onChange} />
        </div>
    )
}


SearchBox.prototype = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
export default SearchBox