import React from 'react'
import PropTypes from 'prop-types'
import TextMore from '../../../../components/text-more'
import './style.scss'
import { TEXT_MORE_LIMIT } from '../../../../config/APP_CONST'

const FeedTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <img src={item.image} width={50} height={50} />
                                </td>
                                <td className={"tableName"}>{item.name}</td>
                                <td className={"tableDesc"}><TextMore text={item.description} limit={TEXT_MORE_LIMIT} /></td>
                                <td className={"tableDate"}>{new Date(item.dateLastEditedTimeStamp).toDateString()}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    )
}

FeedTable.prototype = {
    data: PropTypes.array.isRequired
}

export default FeedTable