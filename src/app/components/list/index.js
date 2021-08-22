import React, { useState } from 'react'
import Pagination from '../pagination'
export default function ({ data, renderItem, countPerPage }) {

    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(countPerPage - 1)

    const onChangePage = (page) => {
        let val = (page + 1) * countPerPage
        setEndIndex(val - 1)
        setStartIndex(val - countPerPage - 1)
    }
    const results = data.map((item, index) => {
        if (index >= startIndex && index <= endIndex)
            return renderItem(item, index)
        return null
    })

    const pagination = <Pagination itemsPerPage={countPerPage} length={data.length} pageLimit={5} onChangePage={onChangePage} />

    return (
        <>
            {pagination}
            <div className={"row"}>
                {results}
            </div>
            {pagination}
        </>
    )

}