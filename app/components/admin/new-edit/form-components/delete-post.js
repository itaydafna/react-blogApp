import {Component} from 'react';
export const DeletePost = ({formAction})=> {
    console.log(formAction);
    if(formAction === 'Edit'){
    return <button type="button" className="btn btn-danger pull-right">Delete Post</button>
}else {
    return null;}
}

