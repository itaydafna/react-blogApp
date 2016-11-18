import {Component} from 'react';

export const SortChevron = ({sortedBy})=>{
    console.log(sortedBy);
    if(sortedBy){
        return (
            <i className="glyphicon glyphicon-chevron-down"></i>
        )
    }else{
        return null;
    }
};
