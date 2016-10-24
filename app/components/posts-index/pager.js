import {Component} from 'react';
import {Link} from 'react-router';

export const Pager = ({
    showOlderPosts,
    showNewerPosts,
    olderPostsAvailable,
    newerPostsAvailable,
    currentPage

}) =>{
    const olderPosts = ()=>{
        if(olderPostsAvailable){
            return (
                <li className="previous"
                    onClick={showOlderPosts}>
                    <Link to={`posts/${currentPage+1}`}>← Older</Link>
                </li>
            )
        }
    };
    const newerPosts = ()=>{
        if(newerPostsAvailable){
            return (
                <li className="next"
                    onClick={showNewerPosts}>
                    <Link to={currentPage - 1 === 1?`posts`:`posts/${currentPage-1}`}>Newer →</Link>
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
