import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {addNewPost} from '../../../../action-creators/add-new-post'
import {editPost} from '../../../../action-creators/edit-post'
import {deletePost} from '../../../../action-creators/delete-post'

import {DeletePost} from './delete-post';
import {FormHeading} from './form-heading';
import {TitleField} from './title-field';
import {AuthorField} from './author-field';
import {TagsField} from './tags-field';
import {DescriptionField} from './description-field';
import {MarkdownConvertor} from './markdown-convertor/markdown-convertor';
import {MissingValuesAlert} from './form-alerts/missing-values-alert'
import {TitleExistsAlert} from './form-alerts/title-exists-alert'


class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //validity status for the 4 required fields - true if valid
            // (I intentionally named them as the form input element's IDs so I can use these to easily change the validity
            // state while iterating over all the elements' array (used on requriedFieldsValidity))
            postTitle: true,
            postAuthor: true,
            postDescription: true,
            postMd: true,
            //should be true if title of the post already exists in data
            titleExists: false
        };
        this.deletePost = this.deletePost.bind(this)
    }

    //function which checks it the required fields have values in them

    requiredFieldsValidity(formElm) {
        let allRequiredFilledsAreValid = true;
        //selecting an array of all the required inputs
        const requiredInputsArray = formElm.querySelectorAll('.form-control[required]');
        requiredInputsArray.forEach((elm)=> {
            if (elm.value === '') {
                this.setState({
                    [elm.id]: false
                });
                allRequiredFilledsAreValid = false
            } else {
                this.setState({
                    [elm.id]: true
                })
            }
        });
        return allRequiredFilledsAreValid;
    }

    //function which checks if the post's title entered to the form already exists posts list

    titleExists(formElm) {
        const postTitle = formElm.querySelector('#postTitle').value;
        if (this.props.posts.findIndex((post)=>post.title === postTitle) > -1) {
            this.setState({
                titleExists: true
            });
            return true;
        } else {
            this.setState({
                titleExists: false
            });
        }
    }

    //function which creates an object out of the input values

    createPostObject(formElm) {
        //intentionally not adding date at this state since this will serve for both
        //Add New and Edit cases (date shouldn't be changed on edit)
        return {
            title: formElm.querySelector('#postTitle').value,
            author: formElm.querySelector('#postAuthor').value,
            tags: formElm.querySelector('#postTags').value.replace(/ /g, '').split(','),
            mdSource: formElm.querySelector('#postMd').value,
            description: formElm.querySelector('#postDescription').value
        }
    }

    addNewPost(formElm,allFieldsValid, titleExists){
        if (allFieldsValid && !titleExists) {
            let newPost = this.createPostObject(formElm);
            //adding the new post's date here:
            newPost.date = String(Date.now());
            this.props.addNewPost(newPost);
            this.context.router.push(`admin`);
        }
    }

    editPost(formElm,allFieldsValid){
        if(allFieldsValid){
         let editedPost = this.createPostObject(formElm);
            this.props.editPost(this.props.params.post,editedPost);
            this.context.router.push(`admin`);
        }
    }


    onFormSubmit(e) {
        e.preventDefault();
        const formElm = e.target;
        let allFieldsValid = this.requiredFieldsValidity(formElm);
        let titleExists = this.titleExists(formElm);

        if(this.props.formAction === 'Add New') {
            this.addNewPost(formElm, allFieldsValid, titleExists);
        }
        else if(this.props.formAction === 'Edit'){
            this.editPost(formElm,allFieldsValid);
        }
    };

    deletePost(){
        this.props.deletePost(this.props.params.post);
        this.context.router.push(`admin`);
    }

    render() {
        //formAction can be either "Edit" or "Add New"
        const {postTitle, postAuthor, postMd, postDescription, titleExists} = this.state;
        const {formAction, post} = this.props;

        //added these multiple conditions since md should only be rendered on Edit formed
        // and since new posts don't have an mdPath - they have an mdSource instead
        const mdPath = formAction === 'Edit' ? post.mdPath : null;
        const mdSource = formAction === 'Edit' ? post.mdSource : null;
        let md = mdPath ? require(`raw!../../../../../${mdPath}`) : mdSource;


        return (<section className="col-sm-12">
                <FormHeading
                    formAction={formAction}/>
                {/* Invalid Input Alert */}
                <TitleExistsAlert
                    titleExists={titleExists}
                />
                <MissingValuesAlert
                    valuesMissing={!postTitle || !postAuthor || !postMd ||!postDescription}
                />
                {/*the noValidate atr prevents the default html form validation*/}
                <form
                    noValidate
                    onSubmit={(e)=>{this.onFormSubmit(e)}}
                >
                    {/* Top Settings */}
                    <div className="row">
                        <div className="col-sm-6">
                            <TitleField
                                defaultValue={formAction==='Edit'?post.title:''}
                                postTitle={postTitle}
                            />
                            <AuthorField
                                defaultValue={formAction==='Edit'?post.author:''}
                                postAuthor={postAuthor}
                            />
                            <TagsField defaultValue={formAction==='Edit'?post.tags.join(', '):''}/>
                        </div>
                        <DescriptionField
                            defaultValue={formAction==='Edit'?post.description:''}
                            postDescription={postDescription}
                        />
                    </div>
                    <hr />
                    {/* Markdown and Live Preview */}
                    <div className="row">
                        <MarkdownConvertor
                            defaultValue={formAction==='Edit'?md:''}
                            postMd={postMd}
                        />
                    </div>
                    <hr />
                    <button type="submit" className="btn btn-primary">Save Post</button>
                    <DeletePost
                        formAction={formAction}
                        deletePost = {this.deletePost}
                    />
                </form>
            </section>
        );
    }
};

PostForm.contextTypes = {
    router: PropTypes.object
};


const mapStateToProps = (state)=> {
    return {
        posts: state.posts.arr
    }

};

PostForm = withRouter(connect(
    mapStateToProps, {
        addNewPost,
        editPost,
        deletePost
    }
)(PostForm));

export default PostForm


