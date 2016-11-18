import {Component} from 'react';
import {Link} from 'react-router';
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
                    <Link className="btn btn-primary" to="admin/new/post">Add New Post</Link>
                </footer>
            </section>
            <Sidebar
                pathPrefix={'/admin'}
                filterTerm={queryVal}
            />
        </div>)
}

