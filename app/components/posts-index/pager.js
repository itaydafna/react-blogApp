import {Component} from 'react';

export const Pager = ({
    showOlderPosts,
    olderPostsAvailable,
    newerPostsAvailable
}) =>{
    const olderPosts = ()=>{
        if(olderPostsAvailable){
            return (
                <li className="previous"
                    onClick={showOlderPosts}>
                    <a href="#">← Older</a>
                </li>
            )
        }
    };
    const newerPosts = ()=>{
        if(newerPostsAvailable){
            return (
                <li className="next">
                    <a href="#">Newer →</a>
                </li>
            )
        }
    };

    return (
    <ul className="pager">
        {olderPosts()}
        {newerPosts()}
    </ul>
)
};
