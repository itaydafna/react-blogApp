import {Component} from 'react';
export const TitleField = ({defaultValue}) =>(
<div className="form-group required">
    <label htmlFor="postTitle">Title</label>
    <input type="text" 
           className="form-control" 
           id="postTitle" 
           name="postTitle" 
           placeholder="Post Title" 
           required autofocus 
           defaultValue={defaultValue}/>
</div>)
