import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import BaseRouter from '../app/router/index'
import './theme/app.scss'
export default function () {
    return (
        <Provider store={store}>
            <BaseRouter />
        </Provider>
    )
}