import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import PostsTableHead from './posts-table-head'
import {PostTableRow} from './post-table-row'

import {getFilteredPosts} from '../../../reducers/reducer-root'

let PostsTable = ({filteredPosts})=>{
    return (
        <table className="table table-bordered table-hover table-striped postsTable">
           <PostsTableHead/>
            <tbody>
            {filteredPosts.map(({title,author,date},index)=>{
                let dateObj = new Date(Number(date));
                let [,month,day,year] = dateObj.toDateString().split(' ');
                return(
                <PostTableRow
                    number = {index+1}
                    key = {title}
                    title = {title}
                    author = {author}
                    date = {`${month} ${day}, ${year}`}
                />)})
            }

            </tbody>
        </table>
    )
};

const mapStateToProps = (state, {location}) => {
    //extracting the query var from the url
    let queryVar = Object.keys(location.query)[0];
    //extracting the filter term (query val) from the url
    let filterTerm = location.query[queryVar] || '';

    return {
        filteredPosts: getFilteredPosts(state, filterTerm, queryVar),
        queryVar,
        filterTerm
    }};


PostsTable = withRouter(connect(
    mapStateToProps
)(PostsTable));


export default PostsTable;
