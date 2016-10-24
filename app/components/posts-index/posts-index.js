import {Component} from 'react'
import {connect} from 'react-redux';
import {getActivePosts} from '../../actions/get-active-posts';

import {IndexHeader} from './index-header'
import {Pager} from './pager'
import VisiblePreviews from './visible-previews'


let PostsIndex = ({
    posts,
    getActivePosts,
    visiblePreviews,
    params
}) => {
    
    let currentPage = isNaN(Number(params.page))? 1: Number(params.page);

    return(
        <section className="col-md-8">
            <IndexHeader posts={posts}/>

            <VisiblePreviews />
            <Pager
                showOlderPosts={()=>getActivePosts(posts,currentPage + 1)}
                showNewerPosts={()=>getActivePosts(posts,currentPage - 1)}
                olderPostsAvailable = {visiblePreviews.tracking.olderPostsAvailable}
                newerPostsAvailable = {visiblePreviews.tracking.newerPostsAvailable}
                currentPage = {currentPage}

            />
        </section>
    );

};


const mapStateToProps = (state) => ({
    posts: state.posts,
    visiblePreviews: state.visiblePreviews
});



PostsIndex = connect(
    mapStateToProps,
    {getActivePosts}
)(PostsIndex);


export default PostsIndex;