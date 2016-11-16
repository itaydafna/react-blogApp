import {Component} from 'react';
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router';

import {normalizeAuthor, normalizeTag, removeNonLetters} from '../../assets/UTILS'

//a function which filters and gets the selected post based on its title
const getSelectedPost = (posts, postTitle)=> {
    // finding the index of the specific post based on its name as it is passed on the URLs params
    let postIndex = posts.findIndex((post)=>
        //the toUpperCase is used in order for the comparison to return true even if there are case-typos
        // on the URL params.
    removeNonLetters(post.title).toUpperCase() === postTitle.toUpperCase());


    return posts[postIndex];
};


let SinglePostView = ({selectedPost})=> {

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

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
}


const mapStateToProps = (state,{params}) => ({
    posts: state.posts,
    selectedPost: getSelectedPost(state.posts,params.post)
});

SinglePostView = connect(
    mapStateToProps
)(SinglePostView);

export default SinglePostView;