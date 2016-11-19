import {Component} from 'react';
export const DescriptionField = ({defaultValue,postDescription})=>(
    <div className="col-sm-6">
        <div className={postDescription?"form-group required":"form-group required has-error"}>
            <label htmlFor="postDescription">Description</label>
            <textarea
                className="form-control"
                id="postDescription"
                name="postDescription"
                rows={10}
                placeholder="Post Description" required
                defaultValue={defaultValue}/>
        </div>
    </div>)

