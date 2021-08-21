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
            <div>
                <FeedList data={props.feedList} countPerPage={10} />
                <FeedTable />
            </div>
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
export default connect(mapStateToProps, mapDispathToProps)(Feed)