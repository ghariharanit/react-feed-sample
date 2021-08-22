import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import Storage from '../../utils/storage'
import FeedList from './components/feed-list'
import FeedTable from './components/feed-table'
import SortBy from './components/sort-by'
import SearchBox from './components/search-box'

import Loader from '../../components/loader'

import { fetchFeed } from '../../redux/actions/feedAction'

import './style.scss'
import PropTypes from 'prop-types'
import { PAGINATION_COUNT } from '../../config/APP_CONST'

const Feed = (props) => {

    const [searchInput, setSearchInput] = useState(Storage.getItem(Storage.KEYS.SEARCH_VALUE) || "")
    const [sortBy, setSortBy] = useState(Storage.getItem(Storage.KEYS.SORT_BY) || "")
    const timer = useRef(false)

    const filterData = (search, sortBy) => {
        props.fetchFeed(search, sortBy)
    }
    useEffect(() => {
        Storage.setItem(Storage.KEYS.SORT_BY, sortBy);
        clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            Storage.setItem(Storage.KEYS.SEARCH_VALUE, searchInput);
            filterData(searchInput, sortBy)
        }, 500)
    }, [searchInput, sortBy])



    const renderContent = () => {
        return (
            <>
                {(props.feedList && props.feedList.length) ?
                    (
                        <>
                            <div>
                                <FeedList data={props.feedList} countPerPage={PAGINATION_COUNT} />
                            </div>
                            <div className={"feedTable"}>
                                <FeedTable data={props.feedList} />
                            </div>
                        </>
                    )
                    : <div className={"noData"}>No Data</div>}
            </>
        )
    }

    return (
        <>
            <div className={"inputContainer"}>
                <SearchBox value={searchInput} onChange={setSearchInput} />
                <SortBy value={sortBy} onChange={setSortBy} />
            </div>
            {props.isFeedFetching ? <Loader /> : renderContent()}
        </>
    )

}
const mapStateToProps = (state) => {
    return {
        feedList: state.feedReducer.feedList,
        isFeedFetching: state.feedReducer.isFeedFetching
    }
}
const mapDispathToProps = {
    fetchFeed
}

Feed.prototype = {
    feedList: PropTypes.array.isRequired,
    isFeedFetching: PropTypes.bool.isRequired,
    fetchFeed: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispathToProps)(Feed)
