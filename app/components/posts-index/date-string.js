import {Component} from 'react';

export const DateString = ({date})=> {
  const dateObj = new Date(Number(date));
  const [,month,day,year] = dateObj.toDateString().split(' ');
    return (
    <p>
        <small className="glyphicon glyphicon-time glyph-before"/>
        Posted on {day} {month}, {year}
    </p>
)};
