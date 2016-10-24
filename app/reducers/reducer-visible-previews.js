import {combineReducers} from 'redux';

const visiblePreviewsData  = (state =[], action) => {
    switch (action.type){
        case 'SHOW_OLDER_POSTS':
        case 'SHOW_NEWER_POSTS':
            return action.posts
    }
    return state;
};


const visiblePreviewsTracking = (state = {}, action)=> {
    return state;
}


const visiblePreviews = combineReducers({
        visiblePreviewsData,
        visiblePreviewsTracking
    }
);

export default visiblePreviews;