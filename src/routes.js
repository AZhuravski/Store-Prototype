import { Router, Route, Redirect } from 'react-router'
import React from 'react'
import history from './history'
import App from './RouteHandlers/App'
import Products from './RouteHandlers/Products'
import Articles from './RouteHandlers/Articles'
import Counter from './RouteHandlers/CounterRoute'

export default (
    <Router history = {history}>
    	<Redirect from = "/" to = "/products" />
        <Route path = "/" component = {App}>
        	<Route path = "products/:id" component = {Counter} />
            <Route path = "products" component = {Products} />
            <Route path = "articles" component = {Articles} />
            <Route path = "counter" component = {Counter} />
        </Route>
    </Router>
)