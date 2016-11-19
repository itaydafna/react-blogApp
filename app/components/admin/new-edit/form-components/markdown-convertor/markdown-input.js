import {Component} from 'react';
export const MarkdownInput = ({defaultValue, onTextChange,postMd})=>(
        <div className={postMd?"form-group required col-sm-6":"form-group required has-error col-sm-6"}>
            <label htmlFor="postMd">Markdown</label>
            <textarea className="form-control previewPane"
                      id="postMd"
                      name="postMd"
                      rows={20}
                      placeholder="Post Markdown" required
                      defaultValue={defaultValue}
                      onChange = {onTextChange}/>
        </div>
)
