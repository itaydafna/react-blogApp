import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {normalizeAuthor, normalizeTag, normalizeMonth} from '../../assets/UTILS'

import {IndexHeader} from './index-header';
import {VisiblePreviews} from './visible-previews';
import {Pager} from './pager';


//function which filters the posts array based on the 'filter-term' on the query param

const getFilteredPosts = (posts, filterTerm, queryVar) => {
    switch (queryVar) {
        case 'author':
            return [...posts.filter((post)=> {
                if (normalizeAuthor(post.author) === normalizeAuthor(filterTerm)) {
                    return post
                }
            })];
            break;
        case 'category':
            return [...posts.filter((post)=> {
                if (post.tags.some((tag)=>(normalizeTag(tag) === normalizeTag(filterTerm)))) {
                    return post;
                }
            })];
            break;
        case 'month':
            return [...posts.filter((post)=> {
                if (normalizeMonth(post.date) === filterTerm) {
                    return post;
                }
            })];
            break;
        case 'search':
            return [...posts.filter((post)=> {
                if (
                    //testing if the post's author name includes part of the filter term
                _.includes(normalizeAuthor(post.author), normalizeAuthor(filterTerm)) ||
                //testing if one or more(some) of the post's tags includes part of the filter term
                post.tags.some((tag)=>_.includes(normalizeTag(tag), normalizeTag(filterTerm))) ||
                //testing if the post's dates includes part of the filter term
                _.includes(normalizeMonth(post.date), filterTerm) ||
                //testing if the post's descrisption includes part of the filter term
                _.includes(post.description.toLowerCase(), filterTerm)

                ) {
                    return post
                }
            })];
            break;

        default:
            return posts;
    }
};


let PostPreviews = ({location, params, posts}) => {
    //extracting the query var from the url
    let queryVar = Object.keys(location.query)[0];
    //extracting the filter term (query val) from the url
    let filterTerm = location.query[queryVar] || '';

    //filtering the posts array based on the 'filter-term' on the query param
    let filteredPostsArray = getFilteredPosts(posts, filterTerm, queryVar);

    //chunking the filtered posts array to pages
    let chunkedArray = _.chunk(filteredPostsArray, 3);

    let currentPage = params.page ? params.page : 1;

    let visiblePreviews = chunkedArray[currentPage - 1];

    return (
        <div>
            <IndexHeader posts={filteredPostsArray}/>
            <VisiblePreviews
                visiblePreviews = {visiblePreviews}
            />
            <Pager
                currentPage={Number(currentPage)}
                queryVar={queryVar}
                queryVal={filterTerm}
                chunkedArray={chunkedArray}
            />
        </div>

    )
};


const mapStateToProps = (state, {params}) => ({
    posts: state.posts
});


PostPreviews = connect(
    mapStateToProps
)(PostPreviews);


export default PostPreviews;




