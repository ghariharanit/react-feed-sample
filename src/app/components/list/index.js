import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Pagination from '../pagination'
import { PAGINATION_COUNT } from '../../config/APP_CONST'
function List({ data, renderItem, countPerPage }) {

    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(countPerPage - 1)

    const onChangePage = (page) => {
        let val = (page + 1) * countPerPage
        setEndIndex(val - 1)
        setStartIndex(val - countPerPage)
    }
    let count = 0
    const results = data.map((item, index) => {
        count = count + 1
        if (index >= startIndex && index <= endIndex) {
            return renderItem(item, index)
        }
        return null
    })

    const pagination = <Pagination itemsPerPage={countPerPage} length={data.length} pageLimit={5} onChangePage={onChangePage} />

    return (
        <>
            <div className={"row"}>
                {results}
            </div>
            {count > PAGINATION_COUNT ? pagination : null}
        </>
    )
}
List.prototype = {
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    countPerPage: PropTypes.number.isRequired
}
export default List