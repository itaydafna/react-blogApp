import {SHOW_OLDER_POSTS, SHOW_NEWER_POSTS} from '../actions/posts-preview-navigation'

///////////////////////////////////////////////////////WORKING CODE////////////////////////////////////////////////////////
// const visiblePreviews = (state = {}, action) => {
//     switch (action.type) {
//         case SHOW_OLDER_POSTS:
//             if (state.tracking.olderPostsAvailable) {
//                 let newFirstPreviewIndex = state.tracking.firstVisiblePreviewIndex + 3;
//                 return Object.assign({},
//                     state,
//                     {
//                         data: action.payload.posts.slice(newFirstPreviewIndex,
//                             newFirstPreviewIndex +3),
//                         tracking: {
//                             firstVisiblePreviewIndex : newFirstPreviewIndex,
//                             newerPostsAvailable: newFirstPreviewIndex >0,
//                             olderPostsAvailable: action.payload.posts.length - newFirstPreviewIndex > 3,
//                             currentPage: state.tracking.currentPage +1
//                         }
//                     }
//                 )
//             }
//             break;
//         case SHOW_NEWER_POSTS:
//             if (state.tracking.newerPostsAvailable) {
//                 console.log(state.tracking);
//                 let newFirstPreviewIndex = state.tracking.firstVisiblePreviewIndex - 3;
//                 return Object.assign({},
//                     state,
//                     {
//                         data: action.payload.posts.slice(newFirstPreviewIndex,
//                             newFirstPreviewIndex +3),
//                         tracking: {
//                             firstVisiblePreviewIndex : newFirstPreviewIndex,
//                             newerPostsAvailable: newFirstPreviewIndex > 0,
//                             olderPostsAvailable: action.payload.posts.length - newFirstPreviewIndex > 3,
//                             currentPage: state.tracking.currentPage -1
//                         }
//                     }
//                 )
//             }
//     }
//     return state;
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






const visiblePreviews = (state = {}, action) => {
    switch (action.type) {
        case SHOW_OLDER_POSTS:
            console.log(action.payload.page<state.tracking.numberOfPages);
            if (state.tracking.olderPostsAvailable) {
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
                )
            }
            break;

        case SHOW_NEWER_POSTS:
            if (state.tracking.newerPostsAvailable) {
                let newFirstPreviewIndex = action.payload.page*3-3;
                return Object.assign({},
                    state,
                    {
                        data: action.payload.posts.slice(newFirstPreviewIndex,
                            newFirstPreviewIndex +3),
                        tracking: Object.assign({},state.tracking,{
                            firstVisiblePreviewIndex : newFirstPreviewIndex,
                            newerPostsAvailable: newFirstPreviewIndex > 0,
                            olderPostsAvailable: action.payload.page < state.tracking.numberOfPages,
                            currentPage: action.payload.page

                        })
                    }
                )
            }
    }
    return state;
};






export default visiblePreviews;