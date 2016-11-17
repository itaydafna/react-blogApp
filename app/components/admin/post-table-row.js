import {Component} from 'react';

export const PostTableRow = ({number,title,author,date})=> {
    return (
        <tr>
            <th scope="row">{number}</th>
            <td>{title}</td>
            <td>{author}</td>
            <td>{date}</td>
        </tr>   
    )
}
