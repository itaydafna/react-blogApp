import {Component} from 'react';
export const DescriptionField = ({defaultValue})=>(
    <div className="col-sm-6">
        <div className="form-group required">
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

