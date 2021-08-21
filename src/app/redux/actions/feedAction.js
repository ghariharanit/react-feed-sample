import { FEED_FETCHING, FEED_LIST } from '../constants/actionTypes';
import JSON_DATA from '../../data/mock_data.json'
function dispatchEvent(type, data) {
    return {
        type: type,
        payload: data
    }
}
function sortByTitle(a, b) {
    return a.name > b.name ? 1 : -1
}
function sortByDate(a, b) {
    return b.dateLastEditedTimeStamp - a.dateLastEditedTimeStamp
}
const sortData = (data, sortBy = 'title') => {
    return data.map((item) => ({ ...item, dateLastEditedTimeStamp: new Date(item.dateLastEdited).getTime() })).sort(sortBy === 'title' ? sortByTitle : sortByDate)
}

export const fetchFeed = (searchValue, sortBy) => {
    return (dispatch) => {
        dispatch(dispatchEvent(FEED_FETCHING, true))

        if (!searchValue) {
            dispatch(dispatchEvent(FEED_FETCHING, false))
            dispatch(dispatchEvent(FEED_LIST, sortData(JSON_DATA, sortBy)))
            return
        }

        let trimmedValue = ""
        let strictSearch = false
        if (searchValue.length > 2) {
            if (
                (searchValue.charAt(0) === '"' && searchValue.charAt(searchValue.length - 1) === '"')
            ) {
                strictSearch = true
                //strict search
                trimmedValue = searchValue.slice(1, -1)
                trimmedValue = trimmedValue.toLowerCase()
            }
        }

        let results = []
        JSON_DATA.forEach((item) => {
            if (strictSearch) {
                if (
                    (item.name.toLowerCase().indexOf(trimmedValue) !== -1) ||
                    (item.description.toLowerCase().indexOf(trimmedValue) !== -1)
                ) {
                    results.push(item)
                }
            } else {
                const searchWords = searchValue.toLowerCase().split(" ")
                const sourceWords = (item.name + " " + item.description).toLowerCase().split(" ")
                const findResult = searchWords.find(searchVal => sourceWords.find(word => word.indexOf(searchVal) !== -1))
                if (findResult) {
                    results.push(item)
                }
            }
        })

        dispatch(dispatchEvent(FEED_FETCHING, false))
        dispatch(dispatchEvent(FEED_LIST, sortData(results, sortBy)))
    }
}
