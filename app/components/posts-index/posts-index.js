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
    visiblePreviews,
    params
}) => {
    let currentPage = isNaN(Number(params.page))? 1: Number(params.page);
    return(
        <section className="col-md-8">
            <IndexHeader posts={posts}/>

            <VisiblePreviews />
            <Pager
                showOlderPosts={()=>showOlderPosts(posts,currentPage + 1)}
                showNewerPosts={()=>showNewerPosts(posts,currentPage - 1)}
                olderPostsAvailable = {visiblePreviews.tracking.olderPostsAvailable}
                newerPostsAvailable = {visiblePreviews.tracking.newerPostsAvailable}
                currentPage = {currentPage}

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