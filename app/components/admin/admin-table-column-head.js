import {Component} from 'react';
import {connect} from 'react-redux';

import {sortDescending, sortAscending} from '../../action-creators/sort-posts'

import {SortChevron} from './sort-chevron';


class AdminTableColumnHead extends Component {
    constructor() {
        super();
        this.state = {
            sortDirection: 'descending'
        };

        this.onColumnHeadClick = this.onColumnHeadClick.bind(this);
    }

    onColumnHeadClick(columnName) {
        //the left part of the first if condition (before the ||) is in order to make sure that if
        //a non-active column is clicked it will first be sorted Descending
        if (this.props.sortedBy !== columnName ||
            this.state.sortDirection === 'ascending') {
            this.props.sortDescending(columnName);
            this.setState({
                sortDirection: 'descending'
            })
        }
        else if (this.state.sortDirection === 'descending') {
            this.props.sortAscending(columnName);
            this.setState({
                sortDirection: 'ascending'
            })
        }

    }


    render() {
        const {
            columnName,
            sortedBy
        } = this.props;
        return (
            <th onClick={()=>this.onColumnHeadClick(columnName.toLowerCase())}>
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

AdminTableColumnHead = connect(
    mapStateToProps,
    {
        sortDescending,
        sortAscending
    }
)(AdminTableColumnHead);

export default AdminTableColumnHead;