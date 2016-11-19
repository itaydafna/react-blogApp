import {Component} from 'react';
export const TitleField = ({defaultValue, postTitle}) =>(
<div className={postTitle?"form-group required":"form-group required has-error"}>
    <label htmlFor="postTitle">Title</label>
    <input type="text" 
           className="form-control" 
           id="postTitle" 
           name="postTitle" 
           placeholder="Post Title" 
           required
           autofocus
           defaultValue={defaultValue}/>
</div>)
