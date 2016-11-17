import {Component} from 'react';
import {Sidebar} from '../sidebar/sidebar'


import AdminPostsTable from './admin-posts-table'

export const Admin = ({children}) => (
    <div>
        <section className="col-md-8">
            <h2 className="page-header">Edit posts</h2>
            <AdminPostsTable />
            <footer>
                <a className="btn btn-primary" href="#">Add New Post</a>
            </footer>
        </section>
        <Sidebar
        pathPrefix = {'/admin/'}
        />
    </div>)

