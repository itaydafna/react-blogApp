import {Component} from 'react';
import {Link} from 'react-router';


export const Filter = ({
    count,
    category,
    queryVar,
    queryVal,
    filterTerm
})=>{
    return(
        <Link to ={{pathname: `/posts/`,
                    query: {
                    [`${queryVar}`]: `${queryVal}`
                    }}}  
                    className={filterTerm === queryVal? "list-group-item active":"list-group-item"}
                    
        >
            <span className="badge">{count}</span>
            {category}
        </Link>
    );
};
