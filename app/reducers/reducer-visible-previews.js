import {GET_ACTIVE_POSTS} from '../actions/get-active-posts'
import {combineReducers} from 'redux'

//////////////////////////////////////////SINGLE REDUCER//////////////////////////////////////////////////////////////////////
const visiblePreviews = (state = {}, action) => {
    console.log(action);
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
                            newerPostsAvailable: newFirstPreviewIndex > 0,
                            olderPostsAvailable: action.payload.page < state.tracking.numberOfPages,
                            currentPage: action.payload.page
                        })
                    }
                );

    }
    return state;
};


/////////////////////////////////////////////////SEPARATED REDUCERS///////////////////////////////////////////////////////////////


// const data = (state = [],action) => {
//     let newFirstPreviewIndex = action.payload.page * 3 - 3;
//     switch (action.type) {
//         case GET_ACTIVE_POSTS:
//             return action.payload.posts.slice(newFirstPreviewIndex,
//                 newFirstPreviewIndex + 3);
//     }
//     return state;
// };
//
//
// const tracking = (state={},action) => {
//     let newFirstPreviewIndex = action.payload.page * 3 - 3;
//     switch (action.type) {
//         case GET_ACTIVE_POSTS:
//             return Object.assign({}, state, {
//                 firstVisiblePreviewIndex: newFirstPreviewIndex,
//                 newerPostsAvailable: newFirstPreviewIndex > 0,
//                 olderPostsAvailable: action.payload.page < state.numberOfPages,
//                 currentPage: action.payload.page,
//                 numberOfPages: state.numberOfPages
//             })
//     }
//     return state;
// };
//
// const visiblePreviews = combineReducers(
//     data,tracking
// );



export default visiblePreviews;