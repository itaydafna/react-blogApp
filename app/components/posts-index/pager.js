import {Component} from 'react';
import {Link} from 'react-router';

export const Pager = ({
    olderPostsAvailable,
    newerPostsAvailable,
    currentPage,
    queryVar,
    queryVal

}) =>{
    const olderPosts = ()=>{
        if(olderPostsAvailable){
            return (
                <li className="previous"
                    >
                    <Link to={{pathname: `posts/${currentPage+1}`,
                          query: queryVar?{[`${queryVar}`]: `${queryVal}`}:''
                          }}
                    >← Older</Link>
                </li>
            )
        }
    };
    const newerPosts = ()=>{
        if(newerPostsAvailable){
            return (
                <li className="next"
                    >
                    <Link to={{pathname: currentPage - 1 === 1?`posts`:`posts/${currentPage-1}`,
                               query: queryVar?{[`${queryVar}`]: `${queryVal}`}:''
                                
                    }}>Newer →</Link>
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
