import {Component} from 'react';
import {connect} from 'react-redux';

import {getFilteredPosts} from '../../reducers/reducer-root'

import {IndexHeader} from './index-header';
import {VisiblePreviews} from './visible-previews';
import {Pager} from './pager';


let PostPreviews = ({params, filteredPosts, queryVar, filterTerm}) => {

    //sorting the posts data from newest to oldest
    //(done here and not in store since the sortedBy value should be saved for switching to the admin tab)
    filteredPosts= filteredPosts.sort((a, b)=>(b.date.localeCompare(a.date)));

    //chunking the filtered posts array to pages
    let chunkedArray = _.chunk(filteredPosts, 3);

    let currentPage = params.page ? params.page : 1;

    let visiblePreviews = chunkedArray[currentPage - 1];

    return (
        <div>
            <IndexHeader posts={filteredPosts}/>
            <VisiblePreviews
                visiblePreviews = {visiblePreviews}/>
            <Pager
                currentPage={Number(currentPage)}
                queryVar={queryVar}
                queryVal={filterTerm}
                chunkedArray={chunkedArray}
            />
        </div>

    )
};


const mapStateToProps = (state, {location}) => {
    //extracting the query var from the url
    let queryVar = Object.keys(location.query)[0];
    //extracting the filter term (query val) from the url
    let filterTerm = location.query[queryVar] || '';

    return {
    //filtering the posts array based on the 'filter-term' on the query param
    filteredPosts: getFilteredPosts(state, filterTerm, queryVar),
    queryVar,
    filterTerm
}};


PostPreviews = connect(
    mapStateToProps
)(PostPreviews);


export default PostPreviews;




