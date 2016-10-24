import {SHOW_OLDER_POSTS, SHOW_NEWER_POSTS} from '../actions/posts-preview-navigation'


const visiblePreviews = (state = {}, action) => {
    switch (action.type) {
        case SHOW_OLDER_POSTS:
            if (state.tracking.olderPostsAvailable) {
                let newFirstPreviewIndex = state.tracking.firstVisiblePreviewIndex + 3;
                return Object.assign({},
                    state,
                    {
                        data: action.payload.posts.slice(newFirstPreviewIndex,
                            newFirstPreviewIndex +3),
                        tracking: {
                            firstVisiblePreviewIndex : newFirstPreviewIndex,
                            newerPostsAvailable: newFirstPreviewIndex >0,
                            olderPostsAvailable: action.payload.posts.length - newFirstPreviewIndex > 3
                        }
                    }
                )
            }
            break;
        case SHOW_NEWER_POSTS:
            if (state.tracking.newerPostsAvailable) {
                let newFirstPreviewIndex = state.tracking.firstVisiblePreviewIndex - 3;
                return Object.assign({},
                    state,
                    {
                        data: action.payload.posts.slice(newFirstPreviewIndex,
                            newFirstPreviewIndex +3),
                        tracking: {
                            firstVisiblePreviewIndex : newFirstPreviewIndex,
                            newerPostsAvailable: newFirstPreviewIndex > 0,
                            olderPostsAvailable: action.payload.posts.length - newFirstPreviewIndex > 3
                        }
                    }
                )
            }
    }
    return state;
};



export default visiblePreviews;