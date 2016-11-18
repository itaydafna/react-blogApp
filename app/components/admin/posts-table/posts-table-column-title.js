import {Component} from 'react';
import {connect} from 'react-redux';

import {sortDescending, sortAscending} from '../../../action-creators/sort-posts'

import {SortChevron} from './sort-chevron';


let PostsTableColumnTitle = ({sortedBy, sortDirection, sortDescending, sortAscending, columnName})=> {

    const onColumnHeadClick = (columnName) => {
        //case in which a column which the posts are currently sorted by is being clicked
        //(sorting to the other direction)
        if (sortedBy === columnName) {
            if (sortDirection === 'ascending') {
                sortDescending(columnName);
            } else if (sortDirection === 'descending') {
                sortAscending(columnName);
            }
        }
        //case in which a columns which the posts are not currently sorted by is being clicked
        //(keeping the sorted direction of the previous sorted column_
        else {
            if (sortDirection === 'ascending') {
                sortAscending(columnName);
            }
            else if (sortDirection === 'descending') {
                sortDescending(columnName);
            }

        }
    };
    return (
        <th onClick={()=>onColumnHeadClick(columnName.toLowerCase())}>
            {columnName}
                    <span className="pull-right">
                      <SortChevron
                          sortedBy={sortedBy===columnName.toLowerCase()}
                          sortDirection={sortDirection}
                      />
                    </span>
        </th>
    )
};

const mapStateToProps = (state) => ({
    sortedBy: state.posts.sorting.sortedBy,
    sortDirection: state.posts.sorting.direction
});

PostsTableColumnTitle = connect(
    mapStateToProps,
    {
        sortDescending,
        sortAscending
    }
)(PostsTableColumnTitle);

export default PostsTableColumnTitle;