import {combineReducers} from 'redux';


import {FILTER_POSTS} from '../actions/filter-posts'


const filterTerm = (state='',action)=>{
    switch (action.type){
        case FILTER_POSTS:
            return action.payload.filterTerm ? action.payload.filterTerm.toLowerCase(): '';
    }
    return state;
};


const filteredPosts = combineReducers({
    filterTerm
    // filteredPostsArray
    }
);

export default filteredPosts;

