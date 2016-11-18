import {Component} from 'react';
export const NewPost = ()=> {
    return (
        <section className="col-sm-12">
            <h2 className="page-header">Add New Post</h2>
            {/* Invalid Input Alert */}
            {/* <div class="alert alert-danger" role="alert">
             The entered <strong>Title</strong> already exists in another post.
             </div> */}
            {/* <div class="alert alert-danger" role="alert">
             One or more required fields have no value.
             </div> */}
            <form>
                {/* Top Settings */}
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group required">
                            <label htmlFor="postTitle">Title</label>
                            <input type="text" className="form-control" id="postTitle" name="postTitle"
                                   placeholder="Post Title" required autofocus defaultValue/>
                        </div>
                        <div className="form-group required">
                            <label htmlFor="postAuthor">Author</label>
                            <input type="text" className="form-control" id="postAuthor" name="postAuthor"
                                   placeholder="Post Author" required defaultValue/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="postTags">Tags</label>
                            <input type="text" className="form-control" id="postTags" name="postTags"
                                   placeholder="Post Tags" defaultValue/>
                            <p className="help-block">Separate multiple tags with a comma.
                                e.g.<code>Grunt,Tools</code></p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group required">
                            <label htmlFor="postDescription">Description</label>
                            <textarea className="form-control" id="postDescription" name="postDescription" rows={10}
                                      placeholder="Post Description" required defaultValue={""}/>
                        </div>
                    </div>
                </div>
                <hr />
                {/* Markdown and Live Preview */}
                <div className="row">
                    <div className="form-group required col-sm-6">
                        <label htmlFor="postMd">Markdown</label>
                        <textarea className="form-control previewPane" id="postMd" name="postMd" rows={20}
                                  placeholder="Post Markdown" required defaultValue={""}/>
                    </div>
                    <div className="col-sm-6">
                        <label>HTML Preview (read only)</label>
                        {/* Content generated by converting the Markdown to HTML */}
                        <div className="form-control previewPane"/>
                    </div>
                </div>
                <hr />
                <button type="submit" className="btn btn-primary">Save Post</button>
                {/* <button class="btn btn-danger pull-right">Delete Post</button> */}
            </form>
        </section>
    );
};
