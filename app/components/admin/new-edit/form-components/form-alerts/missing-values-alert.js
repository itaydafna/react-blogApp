import {Component} from 'react';
export const MissingValuesAlert = ({valuesMissing}) =>{
    if (valuesMissing){
        return(
    <div className="alert alert-danger" role="alert">
        One or more required fields have no value.
    </div>)} else{
        return null;
    }
}

