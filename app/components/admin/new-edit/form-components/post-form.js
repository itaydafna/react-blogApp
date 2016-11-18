import {Component} from 'react';

import {DeletePost} from './delete-post';
import {FormHeading} from './form-heading';
import {TitleField} from './title-field';
import {AuthorField} from './author-field';
import {TagsField} from './tags-field';
import {DescriptionField} from './description-field';
import {MarkdownInput} from './markdown-input';
import {HTMLPreview} from './html-preview';


export const PostForm = ({formAction, post})=> {
    const mdPath = formAction ==='Edit'?post.mdPath:null;
    const md = mdPath && require(`raw!../../../../../${mdPath}`);
    return (<section className="col-sm-12">
            <FormHeading
                formAction={formAction}/>
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
                        <TitleField defaultValue={formAction==='Edit'?post.title:''}/>
                        <AuthorField defaultValue={formAction==='Edit'?post.author:''}/>
                        <TagsField defaultValue={formAction==='Edit'?post.tags.join(', '):''}/>
                    </div>
                    <DescriptionField defaultValue={formAction==='Edit'?post.description:''} />
                </div>
                <hr />
                {/* Markdown and Live Preview */}
                <div className="row">
                    <MarkdownInput defaultValue={formAction==='Edit'?md:''}/>
                    <HTMLPreview/>
                </div>
                <hr />
                <button type="submit" className="btn btn-primary">Save Post</button>
                <DeletePost
                    formAction={formAction}
                />
            </form>
        </section>
    );
};
