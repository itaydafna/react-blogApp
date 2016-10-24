import {Component} from 'react'
import {connect} from 'react-redux';
import {showOlderPosts,showNewerPosts } from '../../actions/posts-preview-navigation';


import {IndexHeader} from './index-header'
import {Pager} from './pager'
import VisiblePreviews from './visible-previews'

let PostsIndex = ({
    posts,
    showOlderPosts,
    showNewerPosts,
    visiblePreviews
}) => {
    return(
        <section className="col-md-8">
            <IndexHeader posts={posts}/>
            <VisiblePreviews />
            <Pager
                showOlderPosts={()=>showOlderPosts(posts)}
                showNewerPosts={()=>showNewerPosts(posts)}
                olderPostsAvailable = {visiblePreviews.tracking.olderPostsAvailable}
                newerPostsAvailable = {visiblePreviews.tracking.newerPostsAvailable}
            />
        </section>
    );

}


const mapStateToProps = (state) => ({
    posts: state.posts,
    visiblePreviews: state.visiblePreviews
});



PostsIndex = connect(
    mapStateToProps,
    {showOlderPosts, showNewerPosts}
)(PostsIndex);


export default PostsIndex;