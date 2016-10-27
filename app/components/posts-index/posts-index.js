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
    location: { query },
    children
}) => {

    let currentPage = isNaN(Number(query.page))? 1: Number(query.page);
    console.log(currentPage);

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