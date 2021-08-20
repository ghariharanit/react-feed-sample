import { FEED_FETCHING, FEED_LIST } from "../constants/actionTypes";

let initialState = {
    isFeedFetching: true,
    feedList: []
}

export default function feedReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FEED_FETCHING:
            state.isFeedFetching = payload
            return {
                ...state
            }
        case FEED_LIST:
            state.feedList = payload
            return {
                ...state
            }
        default:
            return state
    }
}
