import {Component} from 'react';
export const EditPost = ({params})=>(<div>
    <h1>edit the following post:</h1>
    <p>{params.post}</p>
</div>)