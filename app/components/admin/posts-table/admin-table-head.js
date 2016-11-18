import {Component} from 'react';

import AdminTableColumnHead from './admin-table-column-head';



const AdminTableHead = ({sortDescending, sortAscending})=>{

    const columnNames = ['Title','Author','Date'];
    return(
        <thead>
        <tr>
            <th>#</th>
            {columnNames.map((name)=>
                <AdminTableColumnHead
                    key = {name}
                    columnName = {name}
                />
            )}
        </tr>
        </thead>
    )
};


export default AdminTableHead;

