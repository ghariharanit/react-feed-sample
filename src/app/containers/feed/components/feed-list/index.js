import React, { useState } from 'react'
import List from '../../../../components/list'
import "./style.scss"
const FeedItem = ({ item = { name: '', description: '' }, index }) => {

    const [showMore, setShowMore] = useState(item.description.length > 120 ? true : false)

    return (
        <div className={"column"}>
            <div className={"itemContainer"}>
                <div className="itemImgContainer">
                    <img src={item.image} />
                </div>
                <div className={"itemInfoContainer"}>
                    <div className="itemInfoTitle">{item.name}{index + 1}</div>
                    {showMore && <div className={"itemInfoDesc"}>{item.description.substring(0, 120)} <span > <a href="#!" onClick={(e) => { e.preventDefault(); setShowMore(false) }}>see more</a></span></div>}
                    {!showMore && <div className={"itemInfoDesc"}>{item.description} <span ><a href="#!" onClick={(e) => { e.preventDefault(); setShowMore(true) }}>see less</a></span></div>}
                    {/* <div className>{new Date(item.dateLastEditedTimeStamp).toDateString()} </div> */}
                </div>
            </div>
        </div>
    )
}


const FeedList = ({ data, countPerPage }) => {
    return <List data={data} countPerPage={countPerPage} renderItem={(item, index) => <FeedItem item={item} index={index} key={index} />} />
}

export default FeedList