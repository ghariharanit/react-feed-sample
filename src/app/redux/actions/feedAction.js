import { FEED_FETCHING, FEED_LIST } from '../constants/actionTypes';
import JSON_DATA from '../../data/mock_data.json'
function dispatchEvent(type, data) {
    return {
        type: type,
        payload: data
    }
}

export const fetchFeed = (searchInput) => {
    return (dispatch) => {
        dispatch(dispatchEvent(FEED_FETCHING, true))
        setTimeout(() => {
            dispatch(dispatchEvent(FEED_FETCHING, false))
            dispatch(dispatchEvent(FEED_LIST, JSON_DATA))
        }, 2000)
    }
}
