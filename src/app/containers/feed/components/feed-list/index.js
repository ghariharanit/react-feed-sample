import React from 'react'
import List from '../../../../components/list'

const FeedItem = ({ item }) => {
    return (
        <div >
            <div>
                <img src={item.image} width={150} height={150} />
            </div>
            <div>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div>{new Date(item.dateLastEditedTimeStamp).toDateString()} </div>
                <br />
            </div>
        </div>
    )
}


const FeedList = ({ data, countPerPage }) => {
    return <List data={data} countPerPage={countPerPage} renderItem={(item, index) => <FeedItem item={item} key={index} />} />
}

export default FeedList