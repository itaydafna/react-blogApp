import {Component} from 'react';

export const Filter = ({count,category})=>{
    return(
        <a href="#" className="list-group-item">
            <span className="badge">{count}</span>
            {category}
        </a>
    );
};
