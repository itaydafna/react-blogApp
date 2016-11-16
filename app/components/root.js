import {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect, useRouterHistory, Redirect, IndexRoute} from 'react-router';
import {createHashHistory} from 'history'

import store from '../store'

//an attempt to get rid of query string following hash on URL
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});


import BlogApp from './blog-app';
import PostsIndex from './posts-index/posts-index';
import {Admin} from './admin/admin';
import PostPreviews from './posts-index/post-previews'
import SinglePostView from './single-post/single-post-view'


const Root = () => {
    return (
    <Provider store={store}>
        <Router history={appHistory}>
            <Route path="/" component={BlogApp}>
                <Route path='posts' component={PostsIndex} >
                    <Route path='(:page)' component = {PostPreviews}/>
                    <IndexRoute component = {PostPreviews}/>
                </Route>
                <Route path="post" component = {SinglePostView}>
                    <Route path="(:post)"/>
                </Route>
                <Route path='admin' component={Admin}/>
                <Redirect path='/' to ='posts' component = {PostsIndex}/>
                <IndexRedirect to='posts'/>
            </Route>
        </Router>
    </Provider>
)};


export default Root;
