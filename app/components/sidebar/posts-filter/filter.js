import {Component} from 'react';
import {Link} from 'react-router';

export const Filter = ({
    count,
    category,
    currentPage,
    queryVar,
    queryVal
})=>{
    return(
        <Link to ={{pathname: `/posts/${currentPage}`,
                    query: {
                    [`${queryVar}`]: `${queryVal}`
                    }}} href="#" className="list-group-item">
            <span className="badge">{count}</span>
            {category}
        </Link>
    );
};
