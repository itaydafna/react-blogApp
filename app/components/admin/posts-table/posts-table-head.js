import {Component} from 'react';
import {connect} from 'react-redux';

import {getSortedBy, getDirection} from '../../../reducers/reducer-root'

import PostsTableColumnTitle from './posts-table-column-title';



let PostsTableHead = ({sortedBy,direction,sorting})=>{
    const columnNames = ['Title','Author','Date'];
    return(
        <thead>
        <tr>
            <th>#</th>
            {columnNames.map((name)=>
                <PostsTableColumnTitle
                    key = {name}
                    columnName = {name}
                    sortedBy = {name.toLowerCase()===sortedBy}
                    direction = {name.toLowerCase()===sortedBy?direction:null}
                    sorting = {sorting}
                />
            )}
        </tr>
        </thead>
    )
};

const mapStateToProps = (state) => ({
    sortedBy: getSortedBy(state),
    direction: getDirection(state),
    sorting: state.posts.sorting
});

PostsTableHead= connect(
    mapStateToProps
)(PostsTableHead);

export default PostsTableHead;

