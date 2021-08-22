import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
function Pagination({ length, itemsPerPage, pageLimit, onChangePage }) {

    const [currentP, setCurrentP] = useState(0)
    const [curretPage, setCurrentPage] = useState(0)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(pageLimit - 1)
    const page = Math.ceil(length / itemsPerPage)
    const pPerPage = Math.ceil(page / pageLimit)
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
                if (curretPage - 1 < pageLimit && currentP - 1 >= 0) {
                    setCurrentP(currentP - 1)
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
                if (curretPage + 1 >= pageLimit && currentP + 1 < pPerPage) {
                    setCurrentP(currentP + 1)
                    setStartIndex(startIndex + pageLimit)
                    setEndIndex(endIndex + pageLimit)
                }
            }}>&gt;</button>
        </div >
    )
}
Pagination.prototype = {
    length: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    pageLimit: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired
}
export default Pagination