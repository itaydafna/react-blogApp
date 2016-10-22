import {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRedirect, useRouterHistory, Redirect, browserHistory} from 'react-router';
import {createHashHistory} from 'history'

import store from '../store'

//an attempt to get rid of query string following hash on URL
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});


import App from './blog-app';
import {Index} from './index';
import {Admin} from './admin';


const Root = () => {
    console.log(store);
    return (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path='posts' component={Index}/>
                <Route path='admin' component={Admin}/>
                <Redirect path='/' to ='posts' component = {Index}/>
                <IndexRedirect to='posts'/>
            </Route>
        </Router>
    </Provider>
)};


export default Root;
