import React, { useEffect } from 'react'
import { connect } from 'react-redux'


import FeedList from './components/feed-list'
import FeedTable from './components/feed-table'
import SortBy from './components/sort-by'
import SearchBox from './components/search-box'
import Loader from '../../components/loader'

import { fetchFeed } from '../../redux/actions/feedAction'


const Feed = (props) => {

    useEffect(() => {
        props.fetchFeed()
    }, [])

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
                <SearchBox />
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