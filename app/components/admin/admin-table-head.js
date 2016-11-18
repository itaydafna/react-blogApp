import {Component} from 'react';
import {connect} from 'react-redux';

import {AdminTableColumnHead} from './admin-table-column-head';

import {sortDescending} from '../../action-creators/sort-posts'

let AdminTableHead = ({sortDescending,sortedBy})=>{

    const columnNames = ['Title','Author','Date'];
    console.log(sortedBy);
    return(
        <thead>
        <tr>
            <th>#</th>
            {columnNames.map((name)=>
                <AdminTableColumnHead
                    key = {name}
                    columnName = {name}
                    sortDescending = {()=>sortDescending(name.toLowerCase())}
                    sortedBy = {sortedBy === name.toLowerCase()}
                />
            )}
        </tr>
        </thead>
    )
};

const mapStateToProps = (state) => ({
    sortedBy: state.posts.sortedBy
});

AdminTableHead = connect(
    mapStateToProps,
    {sortDescending}
)(AdminTableHead);

export default AdminTableHead;

