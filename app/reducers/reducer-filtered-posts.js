import {combineReducers} from 'redux';
import _ from 'lodash'

import {FILTER_POSTS} from '../actions/filter-posts'

//function which turns an authors name to this format: itay-dafna
//(also used by the posts-filter component)
export const normalizeAuthor = (authorName) => {
    return authorName.replace(/\s+/g, '-').toLowerCase();
};

//function which turns a tags name to this format : angularjs
//(also used by the posts-filter component)
export const normalizeTag = (tagName) => {
    return tagName.replace(/\s+/g, '').toLowerCase()
};


const filterTerm = (state='',action)=>{
    switch (action.type){
        case FILTER_POSTS:
            return action.payload.filterTerm ? action.payload.filterTerm: '';
    }
    return state;
};


const filteredPostsArray = (state = [], action) => {
    switch (action.type){
        case FILTER_POSTS:
            return action.payload.posts.filter((post)=>{
                let filterTerm = action.payload.filterTerm;
               if (
                   //testing if the post's author name includes part of the filter term
                   _.includes(normalizeAuthor(post.author),normalizeAuthor(filterTerm))||
                   //testing if one or more(some) of the post's tags includes part of the filter term
                       post.tags.some((tag)=>_.includes(normalizeTag(tag),normalizeTag(filterTerm)))
               ){
                   return post
               }
            });
    }
    return state;
};

const filteredPosts = combineReducers({
    filterTerm,
    filteredPostsArray
    }
);

export default filteredPosts;

