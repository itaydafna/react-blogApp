import {Component} from 'react';
import {connect} from 'react-redux';

import {sortDescending, sortAscending} from '../../../action-creators/sort-posts'
import {getSortedBy, getDirection} from '../../../reducers/reducer-root'

import {SortChevron} from './sort-chevron';


class PostsTableColumnTitle extends Component {

    constructor(){
        super();
        this.state = {
            sortDirection:'descending'
        }
    }

    render() {
        const {sortedBy,direction,sortDescending, sortAscending, columnName,sorting} = this.props;
        const onColumnHeadClick = (columnName) => {
            //case in which a column which the posts are currently sorted by is being clicked
            //(sorting to the other direction)
            if (sortedBy) {
                if (direction === 'ascending') {
                    sortDescending(columnName);
                } else if (direction === 'descending') {
                    sortAscending(columnName);
                }
            }
            //case in which a columns which the posts are not currently sorted by is being clicked
            //(keeping the sorted direction of the previous sorted column_
            else {
                let storedDirection = sorting[columnName].direction;
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
                          sortDirection={direction}
                      />
                    </span>
            </th>
        )
    };
}

//
// const mapStateToProps = (state) => ({
//     sortedBy: getSortedBy(state),
//     direction: getDirection(state)
// });

PostsTableColumnTitle = connect(
    null,
    {
        sortDescending,
        sortAscending
    }
)(PostsTableColumnTitle);

export default PostsTableColumnTitle;