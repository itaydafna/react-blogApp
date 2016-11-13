import {Component} from 'react';
import {Link} from 'react-router';

export const Pager = ({
    chunkedArray,
    currentPage,
    queryVar,
    queryVal

}) =>{
    //checking if there are newer/older posts available
    console.log(chunkedArray);

    let olderPostsAvailable = chunkedArray[currentPage] ? true : false;
    let newerPostsAvailable = chunkedArray[currentPage-2] ? true : false;

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
