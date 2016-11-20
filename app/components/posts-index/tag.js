import {Component} from 'react';
import {Link} from 'react-router';
import {normalizeTag} from '../../assets/UTILS'

export const Tag = ({tag})=> (
            <span className='categoryTag'>
                <Link
                className="label label-default"
                to={{pathname: `/posts/`,
                     query: {
                        'category': `${normalizeTag(tag)}`
                            }}}>{tag}
                </Link>
            </span>);




