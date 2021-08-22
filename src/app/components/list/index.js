import React, { useState } from 'react'
import Pagination from '../pagination'
export default function ({ data, renderItem, countPerPage }) {

    const results = data.map((item, index) => {
        return renderItem(item, index)
    })

    return (
        <>
            {/* <Pagination itemsPerPage={10} length={100} pageLimit={5} /> */}
            <div className={"row"}>
                {results}
            </div>
        </>
    )

}