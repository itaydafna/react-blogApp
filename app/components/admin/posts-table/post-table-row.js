import {Component, PropTypes} from 'react';


import {removeNonLetters} from '../../../assets/UTILS'

export class PostTableRow extends Component{
    render() {
        const {number, title, author, date} = this.props;
        return (
            <tr
                onClick={()=>this.context.router.push(`admin/edit/post/${removeNonLetters(title)}`)}>
                <th scope="row">{number}</th>
                <td>{title}</td>
                <td>{author}</td>
                <td>{date}</td>
            </tr>
        )
    }
}

PostTableRow.contextTypes = {
    router: PropTypes.object
};
