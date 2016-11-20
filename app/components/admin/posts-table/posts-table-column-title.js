import {Component} from 'react';
import {connect} from 'react-redux';

import {sortDescending, sortAscending} from '../../../action-creators/sort-posts'


import {SortChevron} from './sort-chevron';


let PostsTableColumnTitle =({sortedBy,sortDescending, sortAscending, columnName,sorting})=> {

        let storedDirection = sorting[columnName.toLowerCase()].direction;

        const onColumnHeadClick = (columnName) => {
            //case in which a column which the posts are currently sorted by is being clicked
            //(sorting to the other direction)
            if (sortedBy) {
                if (storedDirection === 'ascending') {
                    sortDescending(columnName);
                } else if (storedDirection === 'descending') {
                    sortAscending(columnName);
                }
            }
            //case in which a columns which the posts are not currently sorted by is being clicked
            //(keeping the sorted direction of the previous sorted column_
            else {
                if (storedDirection==='ascending') {
                    sortAscending(columnName);
                }
                else if (storedDirection === 'descending') {
                    sortDescending(columnName);
                }

            }
        };
    
        return (
            <th onClick={()=>onColumnHeadClick(columnName.toLowerCase())}>
                {columnName}
                    <span className="pull-right">
                      <SortChevron
                          sortedBy={sortedBy}
                          sortDirection={storedDirection}
                      />
                    </span>
            </th>
        )
};


PostsTableColumnTitle = connect(
    null,
    {
        sortDescending,
        sortAscending
    }
)(PostsTableColumnTitle);

export default PostsTableColumnTitle;