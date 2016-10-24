import {GET_ACTIVE_POSTS} from '../actions/get-active-posts'

const visiblePreviews = (state = {}, action) => {
    switch (action.type) {
        case GET_ACTIVE_POSTS:
                let newFirstPreviewIndex = action.payload.page*3-3;
                return Object.assign({},
                    state,
                    {
                        data: action.payload.posts.slice(newFirstPreviewIndex,
                            newFirstPreviewIndex +3),
                        tracking: Object.assign({},state.tracking, {
                            firstVisiblePreviewIndex : newFirstPreviewIndex,
                            newerPostsAvailable: newFirstPreviewIndex >0,
                            olderPostsAvailable: action.payload.page < state.tracking.numberOfPages,
                            currentPage: action.payload.page
                        })
                    }
                );

    }
    return state;
};






export default visiblePreviews;