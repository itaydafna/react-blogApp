import {Component} from 'react';

export const SortChevron = ({sortedBy,sortDirection})=>{
    if(sortedBy){
        if(sortDirection === 'descending'){
        return (
            <i className="glyphicon glyphicon-chevron-down"></i>
        )}
        else if(sortDirection === 'ascending'){
            return (
                <i className="glyphicon glyphicon-chevron-up"></i>
            )
        }
        else {
            return null;
        }
    }else{
        return null;
    }
};
