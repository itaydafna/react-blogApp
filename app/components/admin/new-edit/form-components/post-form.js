import {Component} from 'react';
import {connect} from 'react-redux'

import {DeletePost} from './delete-post';
import {FormHeading} from './form-heading';
import {TitleField} from './title-field';
import {AuthorField} from './author-field';
import {TagsField} from './tags-field';
import {DescriptionField} from './description-field';
import {MarkdownConvertor} from './markdown-convertor/markdown-convertor';
import {MissingValuesAlert} from './form-alerts/missing-values-alert'
import {TitleExistsAlert} from './form-alerts/title-exists-alert'


//formAction can be either "Edit" or "Add New"
class Form extends Component{
    constructor(){
        super();

        this.state ={
        //validity status for the 4 required fields - true if valid
        // (I intentionally named them as the form input element's IDs so I can use these to easily change the validity
            // state while iterating over all the elements' array (used on requriedFieldsValidity))
            postTitle: true,
            postAuthor: true,
            postDescription: true,
            postMd: true,
        //should be true if title of the post already exists in data
            titleExists: false
        }
    }

    //function which checks it the required fields have values in them

    requiredFieldsValidity(formElm){
        let allRequiredFilledsAreValid = true;
        //selecting an array of all the required inputs
        const requiredInputsArray =formElm.querySelectorAll('.form-control[required]');
        requiredInputsArray.forEach((elm)=> {
            if (elm.value === '') {
                this.setState({
                    [elm.id]: false
                })
                allRequiredFilledsAreValid = false
            }else {
                this.setState({
                    [elm.id]: true
                })
            }
        });
        return allRequiredFilledsAreValid;
    }

    //function which checks if the post's title entered to the form already exists posts list

    titleExists(formElm){
        const postTitle = formElm.querySelector('#postTitle').value;
        if(this.props.posts.findIndex((post)=>post.title === postTitle)>-1) {
            this.setState({
                titleExists: true
            });
            return true;
        } else{
            this.setState({
                titleExists: false
            });
        }
    }

    onFormSubmit(e){
        e.preventDefault();
        const formElm = e.target;
        this.requiredFieldsValidity(formElm);
        this.titleExists(formElm)
        };


    render() {
        const {postTitle,postAuthor,postMd,postDescription,titleExists} = this.state;
        const {formAction, post} = this.props;
        const mdPath = formAction === 'Edit' ? post.mdPath : null;
        const md = mdPath && require(`raw!../../../../../${mdPath}`);
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
                                postTitle = {postTitle}
                            />
                            <AuthorField
                                defaultValue={formAction==='Edit'?post.author:''}
                                postAuthor = {postAuthor}
                            />
                            <TagsField defaultValue={formAction==='Edit'?post.tags.join(', '):''}/>
                        </div>
                        <DescriptionField
                            defaultValue={formAction==='Edit'?post.description:''}
                            postDescription = {postDescription}
                        />
                    </div>
                    <hr />
                    {/* Markdown and Live Preview */}
                    <div className="row">
                        <MarkdownConvertor
                            defaultValue={formAction==='Edit'?md:''}
                            postMd = {postMd}
                        />
                    </div>
                    <hr />
                    <button type="submit" className="btn btn-primary">Save Post</button>
                    <DeletePost
                        formAction={formAction}/>
                </form>
            </section>
        );
    }
};


const mapStateToProps=(state)=>{
    return {
        posts: state.posts.arr
    }

}

const PostForm = connect(
    mapStateToProps
)(Form);

export default PostForm