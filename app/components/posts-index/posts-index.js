import {Component} from 'react'
import {connect} from 'react-redux';
import {showOlderPosts} from '../../actions/show-older-posts';


import {IndexHeader} from './index-header'
import {Pager} from './pager'
import VisiblePreviews from './visible-previews'

let PostsIndex = ({posts, showOlderPosts}) => {
    return(
        <section className="col-md-8">
            <IndexHeader posts={posts}/>
            <VisiblePreviews />
            <Pager showOlderPosts={()=>showOlderPosts(posts)}/>
        </section>
    );

}


const mapStateToProps = (state) => ({
    posts: state.posts
});



PostsIndex = connect(
    mapStateToProps,
    {showOlderPosts}
)(PostsIndex);


export default PostsIndex;