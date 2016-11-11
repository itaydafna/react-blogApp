import {Component} from 'react'
import {connect} from 'react-redux';
import {getActivePosts} from '../../actions/get-active-posts';

import {IndexHeader} from './index-header'
import {Pager} from './pager'
import VisiblePreviews from './visible-previews'


let PostsIndex = ({
    posts,
    visiblePreviews,
    params,
    children,
    location
}) => {

    let currentPage = isNaN(Number(params.page))? 1: Number(params.page),
        queryVar = Object.keys(location.query)? Object.keys(location.query)[0] : null,
        queryVal = location.query[queryVar] || null;
    return(
        <section className="col-md-8">
            <IndexHeader posts={posts}/>
            {/* the children components are
             is dynamic VisiblePreviews component  */}
            {children}
            {/*<VisiblePreviews />*/}
            <Pager
                olderPostsAvailable = {visiblePreviews.tracking.olderPostsAvailable}
                newerPostsAvailable = {visiblePreviews.tracking.newerPostsAvailable}
                queryVar = {queryVar}
                queryVal = {queryVal}
                currentPage = {currentPage}

            />
        </section>
    );

};


const mapStateToProps = (state) => ({
    posts: state.filteredPosts.filteredPostsArray,
    visiblePreviews: state.visiblePreviews
});



PostsIndex = connect(
    mapStateToProps,
    {getActivePosts}
)(PostsIndex);


export default PostsIndex;