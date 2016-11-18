import {Component} from 'react';

import PostsTableColumnTitle from './admin-table-column-head';



const PostsTableHead = ({sortDescending, sortAscending})=>{

    const columnNames = ['Title','Author','Date'];
    return(
        <thead>
        <tr>
            <th>#</th>
            {columnNames.map((name)=>
                <PostsTableColumnTitle
                    key = {name}
                    columnName = {name}
                />
            )}
        </tr>
        </thead>
    )
};


export default PostsTableHead;

