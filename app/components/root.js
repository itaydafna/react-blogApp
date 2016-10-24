import {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRedirect, useRouterHistory, Redirect} from 'react-router';
import {createHashHistory} from 'history'

import store from '../store'

//an attempt to get rid of query string following hash on URL
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});


import App from './blog-app';
import PostsIndex from './posts-index/posts-index';
import {Admin} from './admin/admin';
import VisiblePreviews from './posts-index/visible-previews'


const Root = () => {
    return (
    <Provider store={store}>
        <Router history={appHistory}>
            <Route path="/" component={App}>
                <Route path='posts' component={PostsIndex} >
                    <Route path='(:page)'/>
                </Route>
                <Route path='admin' component={Admin}/>
                <Redirect path='/' to ='posts' component = {PostsIndex}/>
                <IndexRedirect to='posts'/>
            </Route>
        </Router>
    </Provider>
)};


export default Root;
