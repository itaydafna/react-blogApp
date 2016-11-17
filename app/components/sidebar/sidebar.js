import {Component} from 'react'
import {Search} from './search'
import PostsFilter from './posts-filter/posts-filter'
export const Sidebar = ({filterTerm,pathPrefix}) => {
    return(< aside
    className = "col-md-4" >
        {/* Blog Search Well */}
    <Search />
    {/* Blog Categories Well */
    }
    <PostsFilter filterTerm={filterTerm}
                 pathPrefix = {pathPrefix}
    />
    </aside >
            )
};
  