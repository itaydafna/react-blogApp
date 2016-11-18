import {Component} from 'react';
export const TagsField = ({defaultValue}) =>(
    <div className="form-group">
        <label htmlFor="postTags">Tags</label>
        <input type="text"
               className="form-control"
               id="postTags"
               name="postTags"
               placeholder="Post Tags"
               defaultValue={defaultValue} />
        <p className="help-block">Separate multiple tags with a comma.
            e.g.<code>Grunt,Tools</code></p>
    </div>)
