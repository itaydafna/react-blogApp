import {Component} from 'react';
import {Link} from 'react-router';


export const Filter = ({
    count,
    category,
    queryVar,
    queryVal
})=>{
    return(
        <Link to ={{pathname: `/posts/`,
                    query: {
                    [`${queryVar}`]: `${queryVal}`
                    }}}  
                    className = 'list-group-item'
                    activeClassName = 'active'
                    
        >
            <span className="badge">{count}</span>
            {category}
        </Link>
    );
};
