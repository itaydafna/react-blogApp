import {Component} from 'react'
import {connect} from 'react-redux';
import {getActivePosts} from '../../actions/get-active-posts';

import {Sidebar} from '../sidebar/sidebar'


class PostsIndex extends Component {

    render() {
        const {
            params,
            children,
            location
        } = this.props;

        let currentPage = isNaN(Number(params.page)) ? 1 : Number(params.page),
            queryVar = Object.keys(location.query) ? Object.keys(location.query)[0] : null,
            queryVal = location.query[queryVar] || null;

        return (
            <div>
                <section className="col-md-8">
                    {/* the children components are
                     is dynamic VisiblePreviews component  */}
                    {children}
                    {/*<VisiblePreviews />*/}
                </section>
                <Sidebar />
            </div>
        )
    };

}
;


const mapStateToProps = (state) => ({
    posts: state.filteredPosts.filteredPostsArray.array
});


PostsIndex = connect(
    mapStateToProps,
    {getActivePosts}
)(PostsIndex);


export default PostsIndex;