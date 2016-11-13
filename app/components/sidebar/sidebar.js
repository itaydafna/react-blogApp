import {Component} from 'react'
import {Search} from './search'
import PostsFilter from './posts-filter/posts-filter'
export const Sidebar = ({filterTerm}) =>(
    <aside className="col-md-4">
        {/* Blog Search Well */}
        <Search />
        {/* Blog Categories Well */}
        <PostsFilter filterTerm={filterTerm}/>
    </aside>
);