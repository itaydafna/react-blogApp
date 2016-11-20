import {Component} from 'react';
import {Link} from 'react-router';
import {normalizeAuthor} from '../../assets/UTILS'

export const AuthorLink = ({author})=> (
    <p>
        <small className="glyphicon glyphicon-user glyph-before"/>
        by <Link
        to={{pathname: `/posts/`,
                    query: {
                    'author': `${normalizeAuthor(author)}`
                    }}}>
        {author}
    </Link>
    </p>);

