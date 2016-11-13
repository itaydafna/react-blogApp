import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {PostPreview} from './post-preview';
import {getActivePosts} from '../../actions/get-active-posts'
import {filterPosts} from '../../actions/filter-posts'
import {normalizeAuthor, normalizeTag, normalizeMonth} from '../../reducers/reducer-filtered-posts'

let VisiblePreviews = ({chunkedArray,location,params,posts}) => {
    
    // //initiating the store's data with the current page from the params
    //
    // componentWillMount() {
    //
    //     this.dispatchPageFromParams(this.props);
    //
    // }
    //
    // //added this stage in order to make sure that the store is updated with the current page from the parmas
    // //before rendering the component with this data
    //
    // componentWillReceiveProps(newProps) {
    //     if (
    //         newProps.params.page !== this.props.params.page ||
    //         newProps.filterTerm !== this.props.filterTerm ||
    //         newProps.location.query.search !== this.props.location.query.search ||
    //         newProps.location.query.category !== this.props.location.query.category ||
    //         newProps.location.query.author !== this.props.location.query.author ||
    //         newProps.location.query.month !== this.props.location.query.month
    //     ) {
    //         this.dispatchPageFromParams(newProps);
    //     }
    // }
    //
    // //this function extracts the current page from the params and dispatches the store with it
    // //receives props as a parameter
    //
    // dispatchPageFromParams({
    //     params,
    //     filterPosts,
    //     getActivePosts,
    //     posts,
    //     filteredPosts,
    //     numberOfPages,
    //     location
    // }) {
    //     let currentPage = Number(params.page),
    //         queryVar = Object.keys(location.query)[0],
    //         queryVal = location.query[queryVar];
    //     //turning current page to 1 in case it is NaN of smaller or equal to one
    //     //this will help handling a case in which user tries to get to page 1 (or less)
    //     currentPage = (currentPage<= 1 || isNaN(currentPage))?1:currentPage;
    //
    //     //handling a case in which filter term matches 0 posts
    //
    //     if (numberOfPages === 0){
    //         if (queryVar) {
    //             this.context.router.push(`posts/?${queryVar}=${queryVal}`)
    //         } else {
    //             this.context.router.push(`posts/`);
    //         }
    //     }
    //
    //     //handling a case in which user tries to get to page 1 (or less)
    //    else if (currentPage === 1) {
    //         if (queryVar) {
    //                 this.context.router.push(`posts/?${queryVar}=${queryVal}`)
    //             } else {
    //             this.context.router.push(`posts/`);
    //         }
    //     }
    //
    //     //handling a case in which user tries to get to pages higher than the total number of pages
    //      else if (currentPage > numberOfPages) {
    //         if (queryVar) {
    //                 this.context.router.push(`posts/${numberOfPages}?${queryVar}=${queryVal}`)
    //         }
    //         else {
    //             this.context.router.push(`posts/${numberOfPages}`);
    //         }
    //
    //     }
    //
    //     //extracting the filter term from the filters params
    //     let filterTerm = location.query[Object.keys(location.query)[0]] || '';
    //
    //     //dispatching the store with the filter term from the query params
    //     filterPosts(posts, filterTerm);
    //
    //     //dispatching the store with current page
    //     getActivePosts(filteredPosts, currentPage);
    //
    // }


    {
        //extracting the filter term from the filters params
        let filterTerm = location.query[Object.keys(location.query)[0]] || '';

        console.log(filterTerm);


        //filtering the posts array based on the 'filter-term' on the query param
        let filteredPostsArray = posts.filter((post)=>{
            if (
                //testing if the post's author name includes part of the filter term
            _.includes(normalizeAuthor(post.author),normalizeAuthor(filterTerm))||
            //testing if one or more(some) of the post's tags includes part of the filter term
            post.tags.some((tag)=>_.includes(normalizeTag(tag),normalizeTag(filterTerm)))||
            //testing if the post's dates includes part of the filter term
            _.includes(normalizeMonth(post.date),filterTerm)||
            //testing if the post's description includes part of the filter term
            _.includes(post.description.toLowerCase(),filterTerm)

            ){
                return post
            }
        });


        //chunking the filtered posts array to pages
        let chunkedArray = _.chunk(filteredPostsArray, 3);
        let visiblePreviews = [];
        if(!params.page){
            visiblePreviews = chunkedArray[0];
        }else{
            visiblePreviews = chunkedArray[params.page-1];
        }


        if(visiblePreviews) {
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
            )
        } else {
            return null;
        }
    }

};

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
    filterTerm: state.filteredPosts.filterTerm,
    chunkedArray: state.filteredPosts.filteredPostsArray.chunkedArray

});


VisiblePreviews = connect(
    mapStateToProps,
    {
        filterPosts
        , getActivePosts
    }
)(VisiblePreviews);


export default VisiblePreviews;




