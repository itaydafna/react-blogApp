import {Link} from 'react-router';
import {normalizeAuthor, normalizeTag,removeNonLetters} from '../../assets/UTILS'

import {AuthorLink} from './author-link';
import {DateString} from './date-string';
import {Tag} from './tag';


export const PostPreview = ({
    title,
    author,
    date,
    description,
    tags

}) => {
    return (
        <article>
            <header>
                <h2>
                    <Link to={`post/${removeNonLetters(title)}`}>{title}</Link>
                </h2>
               <AuthorLink
                   author = {author}/>
              <DateString
                date={date}
              />
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
