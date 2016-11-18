import {Component} from 'react';

import PostsTableColumnTitle from './posts-table-column-title';



const PostsTableHead = ()=>{

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

