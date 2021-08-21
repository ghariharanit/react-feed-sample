import React from 'react'
import PropTypes from 'prop-types'

import InputBox from '../../../../components/input-box'
const SearchBox = ({ value, onChange }) => {
    return (
        <div>
            <InputBox value={value} type="search" others={{}} onChange={onChange} />
        </div>
    )
}

export default SearchBox

SearchBox.prototype = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}