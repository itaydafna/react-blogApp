import {Component} from 'react';
import {connect} from 'react-redux';

import {getSelectedPost} from '../../../reducers/reducer-root'

import PostForm from './form-components/post-form'

let EditPost = ({selectedPost})=>(
    <PostForm
        formAction = 'Edit'
        post = {selectedPost}
    />
);


const mapStateToProps = (state,{params}) => ({
    selectedPost: getSelectedPost(state,params.post)
});

EditPost = connect(
    mapStateToProps
)(EditPost);

export default EditPost;
