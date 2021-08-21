import React, { useState } from 'react'
export default function ({ length, itemsPerPage, pageLimit }) {

    const [curretPage, setCurrentPage] = useState(0)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(pageLimit - 1)
    const page = Math.abs(length / itemsPerPage)

    const pagination = Array(page).fill().map((item, i) => {
        if (i >= startIndex && i <= endIndex) {
            return (
                <div key={i} className={i == curretPage ? 'active' : 'in-active'}>
                    <button onClick={() => { setCurrentPage(i) }}> {i + 1} </button>
                </div>
            )
        }
    })

    return (
        <div>
            <button disabled={curretPage === 0} onClick={() => {
                setCurrentPage(curretPage - 1)
                if (curretPage - 1 <= pageLimit) {
                    setStartIndex(startIndex - pageLimit)
                    setEndIndex(endIndex - pageLimit)
                }
            }} >Prev</button>
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
                setCurrentPage(curretPage + 1)
                if (curretPage + 1 >= pageLimit) {
                    console.log(curretPage + 1, pageLimit);
                    setStartIndex(startIndex + pageLimit)
                    setEndIndex(endIndex + pageLimit)
                }
            }}>Next</button>
        </div>
    )
}