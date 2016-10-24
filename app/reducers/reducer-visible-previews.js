import {SHOW_OLDER_POSTS} from '../actions/show-older-posts'

const visiblePreviews = (state = {}, action) => {
    switch (action.type) {
        case SHOW_OLDER_POSTS:
            if (state.tracking.olderPostsAvailable) {
                let newFirstPreviewIndex = state.tracking.firstVisiblePreviewIndex + 3;
                return Object.assign({},
                    state,
                    {
                        data: action.posts.slice(newFirstPreviewIndex,
                            newFirstPreviewIndex +3),
                        tracking: {
                            firstVisiblePreviewIndex : newFirstPreviewIndex,
                            newerPostsAvailable: newFirstPreviewIndex >0,
                            olderPostsAvailable: action.posts.length - newFirstPreviewIndex > 3
                        }
                    }
                )
            }
    }
    return state;
};


// const visiblePreviewsTracking = (state = {}, action)=> {
//     return state;
// }
//
//
// const visiblePreviews = combineReducers({
//         visiblePreviewsData,
//         visiblePreviewsTracking
//     }
// );

export default visiblePreviews;