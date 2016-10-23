import {Component} from 'react'
import {connect} from 'react-redux';

import {IndexHeader} from './index-header'
import {PostPreview} from './post-preview'

let PostsIndex = ({posts}) =>(
    <section className="col-md-8">
        <IndexHeader posts={posts.posts} />
        {/* Begin Post */}
        <PostPreview />
        {/* End of Post */}
        {/* Begin Post */}
        <PostPreview />
        {/* End of Post */}
        {/* Begin Post */}
        <PostPreview />
        {/* End of Post */}
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



const mapStateProps = (state) => ({
    posts: state.posts
});


PostsIndex = connect(
    mapStateProps
)(PostsIndex);


export default PostsIndex;