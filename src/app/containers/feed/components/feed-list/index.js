import React from 'react'
import PropTypes from 'prop-types'
import List from '../../../../components/list'
import TextMore from '../../../../components/text-more'
import "./style.scss"
import { TEXT_MORE_LIMIT } from '../../../../config/APP_CONST'
const FeedItem = ({ item = { name: '', description: '' } }) => {

    return (
        <div className={"column"}>
            <div className={"itemContainer"}>
                <div className="itemImgContainer">
                    <img src={item.image} />
                </div>
                <div className={"itemInfoContainer"}>
                    <div className="itemInfoTitle">{item.name}</div>
                    <div className="itemInfoDate">{new Date(item.dateLastEditedTimeStamp).toDateString()} </div>
                    <div className="itemInfoDesc"><TextMore limit={TEXT_MORE_LIMIT} text={item.description} className={"itemInfoDesc"} /></div>
                </div>
            </div>
        </div>
    )
}
FeedItem.prototype = {
    item: PropTypes.object.isRequired
}

const FeedList = ({ data, countPerPage }) => {
    return <List data={data} countPerPage={countPerPage} renderItem={(item, index) => <FeedItem item={item} index={index} key={index} />} />
}

FeedList.prototype = {
    data: PropTypes.array.isRequired,
    countPerPage: PropTypes.number.isRequired
}

export default FeedList