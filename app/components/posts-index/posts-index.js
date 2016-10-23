import {Component} from 'react'
import {connect} from 'react-redux';

import {IndexHeader} from './index-header'
import VisiblePreviews from './visible-previews'

let PostsIndex = ({posts}) =>(
    <section className="col-md-8">
        <IndexHeader posts={posts} />
        <VisiblePreviews />
        {/* Pager */}
        <ul className="pager">
            <li className="previous">
                <a href="#">← Older</a>
            </li>
            <li className="next">
                <a href="#">Newer →</a>
            </li>
        </ul>
    </section>
);



const mapStateToProps = (state) => ({
    posts: state.posts
});


PostsIndex = connect(
    mapStateToProps
)(PostsIndex);


export default PostsIndex;