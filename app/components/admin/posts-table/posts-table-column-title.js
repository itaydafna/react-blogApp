import {Component} from 'react';
import {connect} from 'react-redux';

import {sortDescending, sortAscending} from '../../../action-creators/sort-posts'

import {SortChevron} from './sort-chevron';


class PostsTableColumnTitle extends Component {

    constructor(){
        super();
        this.state = {
            sortDirection:'descending'
        }
    }

    render() {
        const {sortedBy, sortDescending, sortAscending, columnName} = this.props;
        const onColumnHeadClick = (columnName) => {
            //case in which a column which the posts are currently sorted by is being clicked
            //(sorting to the other direction)
            if (sortedBy === columnName) {
                if (this.state.sortDirection === 'ascending') {
                    this.setState({
                        sortDirection: 'descending'
                    });
                    sortDescending(columnName);
                } else if (this.state.sortDirection === 'descending') {
                    this.setState({
                        sortDirection: 'ascending'
                    });
                    sortAscending(columnName);
                }
            }
            //case in which a columns which the posts are not currently sorted by is being clicked
            //(keeping the sorted direction of the previous sorted column_
            else {
                if (this.state.sortDirection === 'ascending') {
                    sortAscending(columnName);
                }
                else if (this.state.sortDirection === 'descending') {
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
                          sortDirection={this.state.sortDirection}
                      />
                    </span>
            </th>
        )
    };
}

const mapStateToProps = (state) => ({
    sortedBy: state.posts.sortedBy
});

PostsTableColumnTitle = connect(
    mapStateToProps,
    {
        sortDescending,
        sortAscending
    }
)(PostsTableColumnTitle);

export default PostsTableColumnTitle;