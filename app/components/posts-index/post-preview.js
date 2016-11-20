import {Link} from 'react-router';
import {normalizeAuthor, normalizeTag,removeNonLetters} from '../../assets/UTILS'
import {Tag} from './tag';

export const PostPreview = ({
    title,
    author,
    date,
    description,
    tags

}) => {

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    return (
        <article>
            <header>
                <h2>
                    <Link to={`post/${removeNonLetters(title)}`}>{title}</Link>
                </h2>
                <p>
                    <small className="glyphicon glyphicon-user"/>
                    by <Link
                    to={{pathname: `/posts/`,
                    query: {
                    'author': `${normalizeAuthor(author)}`
                    }}}>
                    {author}
                </Link>
                </p>
                <p>
                    <small className="glyphicon glyphicon-time"/>
                    Posted on {date.getDate()} {monthNames[date.getMonth()]}, {date.getFullYear()}
                </p>
            </header>
            {/* Post Description */}
            <p>{description}</p>
            <br />
            <footer className="clearfix">
                <p className="pull-left">
                    <b>Tags:&nbsp;</b>
                    {tags.map((tag)=>(
                        <Tag
                            key = {tag}
                            tag = {tag}/>
                    ))}
                </p>
                <Link className="btn btn-primary pull-right" to={`post/${removeNonLetters(title)}`}>
                    Read More <i className="glyphicon glyphicon-chevron-right"/>
                </Link>
            </footer>
            <hr />
        </article>
    )

};
