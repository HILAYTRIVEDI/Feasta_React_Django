import {Route,Switch} from 'react-router-dom';
import Register from './Register';

import React from 'react'

function Content() {
    return (
        <div>
            <Switch>
                <Route path="/register"><Register/></Route>
            </Switch>
        </div>
    )
}

export default Content
