import {Component} from 'react';
export const AuthorField = ({defaultValue}) =>(
    <div className="form-group required">
        <label htmlFor="postAuthor">Author</label>
        <input type="text"
               className="form-control"
               id="postAuthor"
               name="postAuthor"
               placeholder="Post Author"
               required
               defaultValue={defaultValue} />
    </div>)
