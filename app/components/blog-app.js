import {Component} from 'react';

import {Sidebar} from './sidebar/sidebar'
import {Footer} from './footer'
import {Header} from './header'



const BlogApp = ({children,router})=> {
        return (
            <div>
                <Header
                  //a hack in order to have the posts tab active on SinglePost view
                  //the following const is a boolean: true if on SinglePost view
                isPostActive = {router.isActive('post')}/>
                <div className="container">
                    <div className="row">
                {/* the children components are
                either PostsIndex, Admin, SinglePostView, NewPost and EditPost  */}
                        {children}
                    </div>
                    <hr/>
                    <Footer />
                </div>
            </div>)
    };


export default BlogApp;
