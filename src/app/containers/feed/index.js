import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import Storage from '../../utils/storage'
import FeedList from './components/feed-list'
import FeedTable from './components/feed-table'
import SortBy from './components/sort-by'
import SearchBox from './components/search-box'

import Loader from '../../components/loader'

import { fetchFeed } from '../../redux/actions/feedAction'



const Feed = (props) => {

    const [searchInput, setSearchInput] = useState(Storage.getItem(Storage.KEYS.SEARCH_VALUE) || "")
    const timer = useRef(false)

    const filterData = (value) => {
        console.log(value)
        props.fetchFeed()
    }
    useEffect(() => {
        clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            Storage.setItem(Storage.KEYS.SEARCH_VALUE, searchInput);
            filterData(searchInput)
        }, 500)
    }, [searchInput])



    const renderContent = () => {
        return (
            <div>
                <FeedList />
                <FeedTable />
            </div>
        )
    }

    return (
        <>
            <div>
                <SearchBox value={searchInput} onChange={setSearchInput} />
                <SortBy />
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