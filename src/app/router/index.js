import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Feed from '../containers/feed'

export default function BaseRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
            </Switch>
        </Router >
    );
}