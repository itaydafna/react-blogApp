import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {PostTableRow} from './post-table-row'

import {getFilteredPosts} from '../../store'

let AdminPostsTable = ({filteredPosts})=>{
    return (
        <table className="table table-bordered table-hover table-striped postsTable">
            <thead>
            <tr>
                <th>#</th>
                <th>
                    Title
                    <span className="pull-right">
                      {/* <i class="glyphicon glyphicon-chevron-down"></i> */}
                        {/* <i class="glyphicon glyphicon-chevron-up"></i> */}
                    </span>
                </th>
                <th>
                    Author
                    <span className="pull-right">
                      {/* <i class="glyphicon glyphicon-chevron-down"></i> */}
                        {/* <i class="glyphicon glyphicon-chevron-up"></i> */}
                    </span>
                </th>
                <th>
                    Date
                    <span className="pull-right">
                      <i className="glyphicon glyphicon-chevron-down"/>
                        {/* <i class="glyphicon glyphicon-chevron-up"></i> */}
                    </span>
                </th>
            </tr>
            </thead>
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


AdminPostsTable = withRouter(connect(
    mapStateToProps
)(AdminPostsTable));


export default AdminPostsTable;
