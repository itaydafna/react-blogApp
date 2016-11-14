import {Component} from 'react';
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router';

import {getSelectedPost} from '../../actions/get-selected-post'
import {normalizeAuthor, normalizeTag, removeNonLetters} from '../../assets/UTILS'

class SinglePostView extends Component {


    //
    // //initiating the store's data with the selected post from the params
    //
    // componentWillMount() {
    //
    //     this.dispatchSelectedPostFromParams(this.props);
    //
    // }
    //
    //
    // //added this stage in order to make sure that the store is updated with the current selected post from the parmas
    // //before rendering the component with this data
    //
    // componentWillReceiveProps(newProps) {
    //     if (newProps.params.post !== this.props.params.post) {
    //         this.dispatchSelectedPostFromParams(newProps);
    //     }
    // }
    //
    //
    // //this function extracts the selectedPost from the params and dispatches the store with it
    // //receives props as a parameter
    //
    // dispatchSelectedPostFromParams({params, getSelectedPost, posts}) {
    //
    //     //dispatching the store with the selected post
    //     getSelectedPost(posts, params.post);
    //
    // }


    render() {
        //a function which filters and gets the selected post based on its title
        const getSelectedPost = (posts,postTitle)=>{
            // finding the index of the specific post based on its name as it is passed on the URLs params
            let postIndex = posts.findIndex((post)=>
                //the toUpperCase is used in order for the comparison to return true even if there are case-typos
                // on the URL params.
            removeNonLetters(post.title).toUpperCase() === postTitle.toUpperCase());


            return posts[postIndex];
        };


        const selectedPost = getSelectedPost(this.props.posts,this.props.params.post);
        console.log(selectedPost);

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];

        if (selectedPost.title) {
            const {title, author, date, tags, mdPath} = selectedPost;
            const formatedDate = new Date(Number(date));
            //this requires the content of the md file at the md file as raw text which can be rendered by the
            // ReactMarkdown component
            var md = require(`raw!../../../${mdPath}`);

            return (
                <section className="col-md-8">
                    {/* Begin Post */}
                    <article>
                        <header>
                            <h1 className="page-header">{title}</h1>
                            <p>
                                <small className="glyphicon glyphicon-user"/>
                                by <Link
                                to={{pathname: `/posts/`,
                    query: {
                    'author': `${normalizeAuthor(author)}`
                    }}}
                            >
                                {author}
                            </Link>
                            </p>
                            <p>
                                <small className="glyphicon glyphicon-time"/>
                                Posted
                                on {formatedDate.getDate()} {monthNames[formatedDate.getMonth()]}, {formatedDate.getFullYear()}
                            </p>
                            <p>
                                <b>Tags:&nbsp;</b>
                                {tags.map((tag)=>(
                                    <span key={tag}>
                            <Link href="#" className="label label-default"
                                  to={{pathname: `/posts/`,
                    query: {
                    'category': `${normalizeTag(tag)}`
                    }}}>
                                {tag}
                            </Link>
                        </span>
                                ))}
                            </p>
                        </header>
                        <hr />
                        {/* Post Content */}
                        {/*this is where the markdown raw text is being rendered*/}
                        <ReactMarkdown source={md}/>
                        {/* End of Post Content */}
                    </article>
                    <hr />
                    {/* End of Post */}
                    {/* Blog Comments */}
                    {/* Comments Form */}
                    <div className="well">
                        <h4>Leave a Comment:</h4>
                        <form role="form">
                            <div className="form-group">
                                <textarea className="form-control" rows={3} defaultValue={""}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <hr />
                    {/* Posted Comments */}
                    {/* Comment */}
                    <hr />
                    {/* Comment */}
                </section>

            )
        } else {
            return <div>Loading...</div>;
        }
    }
}


const mapStateToProps = (state) => ({
    posts: state.posts,
    selectedPost: state.selectedPost
});

SinglePostView = connect(
    mapStateToProps,
    {getSelectedPost}
)(SinglePostView);

export default SinglePostView;