import {combineReducers} from 'redux';

const visiblePreviews = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_OLDER_POSTS':
            if (state.tracking.olderPostsAvailable) {
                let newFirstPreviewIndex = state.tracking.firstVisiblePreviewIndex + 3;
                Object.assign({},
                    state,
                    {
                        data: action.posts.slice(newFirstPreviewIndex,
                            newFirstPreviewIndex +3),
                        tracking: {
                            firstVisiblePreviewIndex : newFirstPreviewIndex,
                            newerPostsAvailable: newFirstPreviewIndex >0,
                            olderPostsAvailable: action.posts - newFirstPreviewIndex > 3
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