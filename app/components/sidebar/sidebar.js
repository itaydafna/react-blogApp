import {Component} from 'react'
import {Search} from './search'
import PostsFilter from './posts-filter/filter'
export const Sidebar = () =>(
    <aside className="col-md-4">
    {/* Blog Search Well */}
    <Search />
    {/* Blog Categories Well */}
    <PostsFilter />
</aside>
)