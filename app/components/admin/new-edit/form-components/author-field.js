import {Component} from 'react';
export const AuthorField = ({defaultValue,postAuthor}) =>(
    <div className={postAuthor?"form-group required":"form-group required has-error"}>
        <label htmlFor="postAuthor">Author</label>
        <input type="text"
               className="form-control"
               id="postAuthor"
               name="postAuthor"
               placeholder="Post Author"
               required
               defaultValue={defaultValue} />
    </div>)
