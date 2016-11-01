import {Component} from 'react';
import {Link} from 'react-router';

export const Filter = ({count,category,query})=>{
    return(
        <Link to ={`${query}`} href="#" className="list-group-item">
            <span className="badge">{count}</span>
            {category}
        </Link>
    );
};
