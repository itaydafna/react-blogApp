import {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {Sidebar} from '../sidebar/sidebar'
import PostsTable from './posts-table/posts-table'

import {sortDescending, sortAscending} from '../../action-creators/sort-posts'
import {getSortedBy, getDirection} from '../../reducers/reducer-root'


export class Admin extends Component{

     componentWillMount(){
         const {direction,sortedBy,sortDescending,sortAscending} = this.props;
         direction === 'descending'?
             sortDescending(sortedBy):
             sortAscending(sortedBy)
     }

     render(){
         const {location} = this.props;
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
}

const mapStateToProps = (state) => ({
    sortedBy: getSortedBy(state),
    direction: getDirection(state),
    sorting: state.posts.sorting
});

Admin= connect(
    mapStateToProps,
    {sortDescending,
    sortAscending}
)(Admin);

export default Admin;
