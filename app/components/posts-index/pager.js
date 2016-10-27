import {Component} from 'react';
import {Link} from 'react-router';

export const Pager = ({
    olderPostsAvailable,
    newerPostsAvailable,
    currentPage

}) =>{
    const olderPosts = ()=>{
        if(olderPostsAvailable){
            return (
                <li className="previous"
                    >
                    <Link to={{pathname: 'posts', query: { page: currentPage+1}}}>Older →</Link>
                </li>
            )
        }
    };
    const newerPosts = ()=>{
        if(newerPostsAvailable){
            return (
                <li className="next"
                    >
                    <Link to={{pathname: 'posts', query: { page: currentPage - 1 === 1 ? '' : currentPage-1}}}>Newer →</Link>
                </li>
            )
        }
    };

    return (
    <ul className = "pager">
        {olderPosts()}
        {newerPosts()}
    </ul>
)
};
