import {Component} from 'react'
import {Search} from './search'
import {FilterPosts} from './filter-posts'
export const Sidebar = () =>(
    <aside className="col-md-4">
    {/* Blog Search Well */}
    <Search />
    {/* Blog Categories Well */}
    <FilterPosts />
</aside>
)