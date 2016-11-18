import {Component} from 'react';
import {connect} from 'react-redux';

import {AdminTableColumnHead} from './admin-table-column-head';

import {sortDescending} from '../../action-creators/sort-posts'

let AdminTableHead = ({sortDescending})=>{

    const columnNames = ['Title','Author','Date'];

    return(
        <thead>
        <tr>
            <th>#</th>
            {columnNames.map((name)=>
                <AdminTableColumnHead
                    key = {name}
                    columnName = {name}
                    sortDescending = {()=>sortDescending(name.toLocaleLowerCase())}
                />
            )}
        </tr>
        </thead>
    )
};


AdminTableHead = connect(
    null,
    {sortDescending}
)(AdminTableHead);

export default AdminTableHead;

