import {Component} from 'react'
import {Sidebar} from '../sidebar/sidebar'


const PostsIndex = ({
    params,
    children,
    location
}) => {
    let currentPage = isNaN(Number(params.page)) ? 1 : Number(params.page),
        queryVar = Object.keys(location.query) ? Object.keys(location.query)[0] : null,
        queryVal = location.query[queryVar] || null;

    return (
        <div>
            {/* the children components are
             is dynamic VisiblePreviews component  */}
            {children}
            {/*<VisiblePreviews />*/}
        </div>
    )

};


export default PostsIndex;