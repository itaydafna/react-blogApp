import {Component} from 'react';
export const MarkdownInput = ({defaultValue})=>(
        <div className="form-group required col-sm-6">
            <label htmlFor="postMd">Markdown</label>
            <textarea className="form-control previewPane"
                      id="postMd"
                      name="postMd"
                      rows={20}
                      placeholder="Post Markdown" required
                      defaultValue={defaultValue}/>
        </div>
)
