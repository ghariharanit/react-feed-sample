import React from 'react'
import InputBox from '../../../../components/input-box'
import Utils from '../../../../utils'
const SearchBox = ({ value, onChange }) => {
    return (
        <div>
            <InputBox value={value} type="search" others={{}} onChange={onChange} />
        </div>
    )
}

export default SearchBox