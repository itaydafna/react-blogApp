import {Component} from 'react';

export const AdminTableColumnHead = ({columnName, sortDescending})=> {

    return (
        <th onClick={sortDescending}>
            {columnName}
                    <span className="pull-right">
                      {/* <i class="glyphicon glyphicon-chevron-down"></i> */}
                        {/* <i class="glyphicon glyphicon-chevron-up"></i> */}
                    </span>
    </th>

)}
