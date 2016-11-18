import {Component} from 'react';
import {Sidebar} from '../sidebar/sidebar'


import PostsTable from './posts-table/posts-table'

export const Admin = ({location}) => {
    const queryVar = Object.keys(location.query) ? Object.keys(location.query)[0] : null,
          queryVal = location.query[queryVar] || null;
    return (
        <div>
            <section className="col-md-8">
                <h2 className="page-header">Edit posts</h2>
                <PostsTable />
                <footer>
                    <a className="btn btn-primary" href="#">Add New Post</a>
                </footer>
            </section>
            <Sidebar
                pathPrefix={'/admin'}
                filterTerm={queryVal}
            />
        </div>)
}

