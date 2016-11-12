import {Component} from 'react';
import {connect} from 'react-redux';

import {Sidebar} from './sidebar/sidebar'
import {Footer} from './footer'
import {Header} from './header'



const BlogApp = ({children})=> {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                {/* the children components are
                either PostsIndex, Admin or SinglePostView  */}
                        {children}
                        <Sidebar />
                    </div>
                    <hr/>
                    <Footer />
                </div>
            </div>)
    };


export default BlogApp;