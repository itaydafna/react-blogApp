import {Component} from 'react';

import {Sidebar} from '../sidebar/sidebar';

const PostsIndex = ({children, location})=> {
        let queryVar = Object.keys(location.query) ? Object.keys(location.query)[0] : null,
            queryVal = location.query[queryVar] || null;

        return (
            <div>
                <section className="col-md-8">
                    {/* the children components are
                     is dynamic VisiblePreviews component  */}
                    {children}
                    {/*<VisiblePreviews />*/}
                </section>
                <Sidebar
                    filterTerm={queryVal}
                    pathPrefix={'/posts'}
                />
            </div>
        )
};



export default PostsIndex;