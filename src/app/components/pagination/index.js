import React, { useState } from 'react'
import './style.scss'
export default function ({ length, itemsPerPage, pageLimit, onChangePage }) {

    const [curretPage, setCurrentPage] = useState(0)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(pageLimit - 1)
    const page = Math.ceil(length / itemsPerPage)
    const pagination = Array(page).fill().map((item, i) => {
        if (i >= startIndex && i <= endIndex) {
            return (
                <button key={i} className={i == curretPage ? 'active' : 'in-active'} onClick={() => { setCurrentPage(i); onChangePage(i) }}> {i + 1} </button>
            )
        }
    })

    return (
        <div className={"paginationContainer"}>
            <button disabled={curretPage === 0} onClick={() => {
                setCurrentPage(curretPage - 1)
                onChangePage(curretPage - 1)
                if (curretPage - 1 <= pageLimit) {
                    setStartIndex(startIndex - pageLimit)
                    setEndIndex(endIndex - pageLimit)
                }
            }} >&lt;</button>
            {
                pageLimit <= startIndex + 1 ? <div>...</div> : null
            }
            {
                pagination
            }
            {
                pageLimit >= endIndex + 1 ? <div>...</div> : null
            }
            <button disabled={curretPage === page - 1} onClick={() => {
                onChangePage(curretPage + 1)
                setCurrentPage(curretPage + 1)
                if (curretPage + 1 >= pageLimit) {
                    setStartIndex(startIndex + pageLimit)
                    setEndIndex(endIndex + pageLimit)
                }
            }}>&gt;</button>
        </div>
    )
}