import {Component} from 'react'
import {connect} from 'react-redux';
import {getActivePosts} from '../../actions/get-active-posts';

import {Sidebar} from '../sidebar/sidebar'
import {Pager} from './pager'


class PostsIndex extends Component {

    render() {
        const {
            olderPostsAvailable,
            newerPostsAvailable,
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
                    {/*<Pager
                        olderPostsAvailable={olderPostsAvailable}
                        newerPostsAvailable={newerPostsAvailable}
                        queryVar={queryVar}
                        queryVal={queryVal}
                        currentPage={currentPage}

                    />*/}
                </section>
                <Sidebar />
            </div>
        )
    };

}
;


const mapStateToProps = (state) => ({
    posts: state.filteredPosts.filteredPostsArray.array,
    olderPostsAvailable: state.visiblePreviews.tracking.olderPostsAvailable,
    newerPostsAvailable: state.visiblePreviews.tracking.newerPostsAvailable
});


PostsIndex = connect(
    mapStateToProps,
    {getActivePosts}
)(PostsIndex);


export default PostsIndex;