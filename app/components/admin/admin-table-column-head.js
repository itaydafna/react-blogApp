import {Component} from 'react';
import {SortChevron} from './sort-chevron';

export const AdminTableColumnHead = ({columnName, sortDescending,sortedBy})=> {
    console.log(sortedBy)

    return (
        <th onClick={sortDescending}>
            {columnName}
                    <span className="pull-right">
                      <SortChevron sortedBy = {sortedBy}/>
                    </span>
    </th>

)};
