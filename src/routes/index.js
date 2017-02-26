import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './../containers/App'
import Main from './../components/Main'
import Artists from './../components/Artists'
import Artist from './../components/Artist'
import Albums from './../components/Albums'
import NotFound from './../components/NotFound'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Main}/>
            <Route path='artists' component={Artists}/>
            <Route path='/artists/:artist' component={Artist}/>
            <Route path='/albums' component={Albums}/>
        </Route>
        <Route path='*' component={NotFound}/>
    </div>
);


