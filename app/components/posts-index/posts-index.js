import {Component} from 'react';
import {connect} from 'react-redux'

import {Sidebar} from '../sidebar/sidebar';


import {sortDescending, sortAscending} from '../../action-creators/sort-posts'


class PostsIndex extends Component {

   //sorting posts by Descending date order while PostIndex component is being rendered
    componentWillMount(){
        this.props.sortDescending('date');
    }

    render() {
        const {params, children, location} = this.props;

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
                <Sidebar
                    filterTerm={queryVal}
                    pathPrefix={'/posts'}
                />
            </div>
        )
    }
}
;

PostsIndex = connect(
    null,
    {
        sortDescending
    }
)(PostsIndex);


export default PostsIndex;