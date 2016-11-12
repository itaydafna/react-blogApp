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

//function which turns a date string to this format : monthname-yearnumber (march-1982)
//(also used by the posts-filter component)

export const normalizeMonth = (dateString) => {
    const monthNames = ["january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"
    ];
    let date = new Date(Number(dateString));
    return `${monthNames[date.getMonth()]}-${date.getFullYear()}`
};


const filterTerm = (state='',action)=>{
    switch (action.type){
        case FILTER_POSTS:
            return action.payload.filterTerm ? action.payload.filterTerm.toLowerCase(): '';
    }
    return state;
};


const filteredPostsArray = (state = {}, action) => {
    switch (action.type){
        case FILTER_POSTS:
            let filteredPostsArray = action.payload.posts.filter((post)=>{
                let filterTerm = action.payload.filterTerm;
               if (
                   //testing if the post's author name includes part of the filter term
                   _.includes(normalizeAuthor(post.author),normalizeAuthor(filterTerm))||
                   //testing if one or more(some) of the post's tags includes part of the filter term
                       post.tags.some((tag)=>_.includes(normalizeTag(tag),normalizeTag(filterTerm)))||
                    //testing if the post's dates includes part of the filter term
                   _.includes(normalizeMonth(post.date),filterTerm)||
                //testing if the post's description includes part of the filter term
                   _.includes(post.description.toLowerCase(),filterTerm)

               ){
                   return post
               }
            });
            //'chunking' the filteredPostsArray into 'pages' of 3 posts each
             let chunkedFilteredPosts = _.chunk(filteredPostsArray,3);
            return {
                array: filteredPostsArray,
                chunckedArray: chunkedFilteredPosts,
                showingPosts: chunkedFilteredPosts[action.payload.page -1] 
            }
    }
    return state;
};

const filteredPosts = combineReducers({
    filterTerm,
    filteredPostsArray
    }
);

export default filteredPosts;

