import React from 'react'
import FeedList from './components/feed-list'
import FeedTable from './components/feed-table'
import SortBy from './components/sort-by'
import SearchBox from './components/search-box'
const Feed = () => {
    return (
        <>
            <div>
                <SearchBox />
                <SortBy />

            </div>
            <div>
                <FeedList />
                <FeedTable />
            </div>

        </>
    )
}
export default Feed