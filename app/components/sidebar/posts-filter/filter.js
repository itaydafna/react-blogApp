import {Component} from 'react';
import {Link} from 'react-router';


export const Filter = ({
    count,
    category,
    queryVar,
    queryVal,
    //can be either /posts/ or /admin/
    pathPrefix
})=>{
    return(
        <Link to ={{pathname: pathPrefix,
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
