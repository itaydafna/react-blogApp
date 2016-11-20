import {Component} from 'react';

export const Date = ({date})=> {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    
    return (
    <p>
        <small className="glyphicon glyphicon-time glyph-before"/>
        Posted on {date.getDate()} {monthNames[date.getMonth()]}, {date.getFullYear()}
    </p>
)};
