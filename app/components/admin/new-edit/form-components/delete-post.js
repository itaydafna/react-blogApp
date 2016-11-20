import {Component} from 'react';
export const DeletePost = ({formAction,deletePost})=> {
    if(formAction === 'Edit'){
    return <button type="button"
                   className="btn btn-danger pull-right"
                   onClick = {()=>deletePost()}
    >Delete Post</button>
}else {
    return null;}
}

