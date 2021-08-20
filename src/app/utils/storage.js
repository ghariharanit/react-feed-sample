import Logger from './Logger'
const Storage = localStorage

export default {
    KEYS: {
        SEARCH_VALUE: 'searchValue'
    },
    setItem(key, data) {
        try {
            return Storage.setItem(key, JSON.stringify(data))
        } catch (e) {
            Logger.logError(e)
        }

    },
    getItem(key) {
        try {
            return JSON.parse(Storage.getItem(key))
        } catch (e) {
            Logger.logError(e)
        }
    }
}
