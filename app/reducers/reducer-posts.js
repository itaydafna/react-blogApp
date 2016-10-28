import {SHOW_OLDER_POSTS} from '../actions/get-active-posts'
import {showOlderPosts} from '../actions/get-active-posts'

import visiblePreviews from  './reducer-visible-previews'
const posts = (state = [], action) => {
    // switch (action.type){
    //     case SHOW_OLDER_POSTS:
    //         visiblePreviews(undefined, showOlderPosts(state));
    // }
    return state;
};

export default posts;

