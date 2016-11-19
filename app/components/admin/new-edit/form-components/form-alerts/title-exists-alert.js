import {Component} from 'react';
export const TitleExistsAlert = ({titleExists}) => {
    if (titleExists){
        return(
        <div className="alert alert-danger" role="alert">
            The entered <strong>Title</strong> already exists in another post.
        </div>)
} else {
        return null;
    }
}
