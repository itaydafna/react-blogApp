import {Component} from 'react';
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown';


import {AuthorLink} from '../posts-index/author-link'
import {DateString} from '../posts-index/date-string'
import {Tag} from '../posts-index/tag'
import {getSelectedPost} from '../../reducers/reducer-root'



let SinglePostView = ({selectedPost})=> {
    const {title, author, date, tags, mdPath, mdSource} = selectedPost;
    const formatedDate = new Date(Number(date));
    let md = '';

    //added this condition since new posts don't have an mdPath - they have an mdSource instead
    if(mdSource){
        md = mdSource;
    }
    else {
        //this requires the content of the md file at the md file as raw text which can be rendered by the
        // ReactMarkdown component
        md = require(`raw!../../../${mdPath}`);
    }
    return (
        <section className="col-md-8">
            {/* Begin Post */}
            <article>
                <header>
                    <h1 className="page-header">{title}</h1>
                    <AuthorLink
                        author = {author}/>
                  <DateString
                    date={formatedDate}
                  />
                    <p>
                        <b>Tags:&nbsp;</b>
                        {tags.map((tag)=>(
                            <Tag
                                key = {tag}
                                tag = {tag}/>
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
    selectedPost: getSelectedPost(state,params.post)
});

SinglePostView = connect(
    mapStateToProps
)(SinglePostView);

export default SinglePostView;
