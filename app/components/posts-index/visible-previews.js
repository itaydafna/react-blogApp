import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {PostPreview} from './post-preview';
import {getActivePosts} from '../../actions/get-active-posts'
import {filterPosts} from '../../actions/filter-posts'

class VisiblePreviews extends Component{


    //initiating the store's data with the current page from the params

    componentWillMount(){

        this.dispatchPageFromParams(this.props);

    }
    
    //added this stage in order to make sure that the store is updated with the current page from the parmas
    //before rendering the component with this data

    componentWillReceiveProps (newProps){
        if(
            newProps.params.page !== this.props.params.page ||
            newProps.filterTerm !== this.props.filterTerm ||
            newProps.location.query.search !== this.props.location.query.search ||
            newProps.location.query.category!== this.props.location.query.category ||
            newProps.location.query.author !== this.props.location.query.author ||
            newProps.location.query.month !== this.props.location.query.search
        ) {
            this.dispatchPageFromParams(newProps);
        }
    }

    //this function extracts the current page from the params and dispatches the store with it
    //receives props as a parameter

    dispatchPageFromParams({
        params,
        filterPosts,
        getActivePosts,
        posts,
        filteredPosts,
        numberOfPages,
        location
        }){
        let currentPage = Number(params.page);

        console.log(location.query);
        //handling a case in which user tries to get to page 1 (or less)
        if(isNaN(currentPage)|| currentPage<=1){
            currentPage = 1;
            this.context.router.push('/');
        }

        //handling a case in which user tries to get to pages higher than the total number of pages
        if(currentPage > numberOfPages){
            currentPage = 1;
            this.context.router.push(`posts/${numberOfPages}`);
        }

        //dispatching the store with the filter term from the query params
        filterPosts(posts,'');

        //dispatching the store with current page
        getActivePosts(filteredPosts,currentPage);

    }


    render() {

        if(this.props.visiblePreviews){
            const visiblePreviews = this.props.visiblePreviews;
        return (
            <div>
                {visiblePreviews.map(preview =>
                        <PostPreview
                            key={preview.title}
                            title={preview.title}
                            author={preview.author}
                            date={new Date(Number(preview.date))}
                            description={preview.description}
                            tags={preview.tags}
                        />)
                }
            </div>
        )} else{
            return (<div>Loading...</div>)
        }
    }
}

//setting router as context type so it can be used to push page to URL on edge cases (for example 1 or less)
//(used in the dispatchPageFromParams method above)

VisiblePreviews.contextTypes = {
    router: PropTypes.object
};


const mapStateToProps = (state) => ({
    posts: state.posts,
    filteredPosts: state.filteredPosts.filteredPostsArray,
    numberOfPages: state.visiblePreviews.tracking.numberOfPages,
    visiblePreviews: state.visiblePreviews.data,
    filterTerm: state.filteredPosts.filterTerm
});



VisiblePreviews = connect(
    mapStateToProps,
    {filterPosts
    ,getActivePosts}
)(VisiblePreviews);



export default VisiblePreviews;




