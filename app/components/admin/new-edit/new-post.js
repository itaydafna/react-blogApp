import {Component} from 'react';
import PostForm from './form-components/post-form'
export const NewPost = ()=> {
    return (<PostForm
            formAction = 'Add New'
        />
    );
};
