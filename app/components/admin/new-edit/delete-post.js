import {Component} from 'react';
export const DeletePost = ({parent})=> {
    if(parent === 'EditPost'){
    return <button type="button" className="btn btn-danger pull-right">Delete Post</button>
}else {
    return null;}
}

