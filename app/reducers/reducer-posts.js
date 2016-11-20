import {combineReducers} from 'redux'

import {post} from './reducer-post'

import {normalizeAuthor, normalizeTag, normalizeMonth, removeNonLetters} from '../assets/UTILS'

const arr = (state = [], action) => {
    console.log(action.type);
    console.log(action.column);
    switch (action.type) {
        case 'SORT_DESCENDING':
            return [...state.sort((a, b)=>b[action.column].localeCompare(a[action.column]))];
            break;
        case 'SORT_ASCENDING':
            return [...state.sort((a, b)=>a[action.column].localeCompare(b[action.column]))];
            break;
        case 'ADD_NEW_POST':
            return [post(undefined,action),...state];
            break;
        case 'EDIT_POST':
            let postToEdit = getSelectedPost(state,action.postTitle);
            let indexOfPostToEdit = state.indexOf(postToEdit);
            //replacing postToEdit with editedPost
            state.splice(indexOfPostToEdit,1,post(postToEdit,action));
            return[...state];
        case 'DELETE_POST':
            let postToDelete = getSelectedPost(state,action.postTitle);
            let indexOfPostToDelete = state.indexOf(postToDelete);
            state.splice(indexOfPostToDelete,1);
            return[...state];

    }
    return state;
};


//helper function for the sorting reducer:
//accepts state and direction: descending || ascending
const setSortingState = (state,column,direction) => {
    console.log(direction);
    for( var key in state){
                    if (state.hasOwnProperty(key)){
                        if (key===column){
                            state[key].sortedBy = true;
                            state[key].direction = direction;
                        }
                        else{
                            state[key].sortedBy = false;
                        }
                }      
    }
    return {...state};
}

//sorting reducer function 
const sorting = (state = {}, action) => {
    switch (action.type) {
        case 'SORT_DESCENDING':
         setSortingState(state, action.column,'descending');
         break;
        case 'SORT_ASCENDING':
         setSortingState(state, action.column,'ascending');
}
return state;
};

const posts = combineReducers({
    arr,
    sorting
});

export default posts;

//-----------------------------------------------SELECTORS---------------------------------------------

//SELECTOR used by the SinglePostView Component

//a function which filters and gets the selected post based on its title
export const getSelectedPost = (state, postTitle)=> {
    // finding the index of the specific post based on its name as it is passed on the URLs params
    let postIndex = state.findIndex((post)=>
        //the toUpperCase is used in order for the comparison to return true even if there are case-typos
        // on the URL params.
    removeNonLetters(post.title).toUpperCase() === postTitle.toUpperCase());


    return state[postIndex];
};


//SELECTOR used by the PostPreviews and the AdminPostsTable Components

//function which filters the posts array based on the 'filter-term' on the query param

export const getFilteredPosts = (state, filterTerm, queryVar) => {
    switch (queryVar) {
        case 'author':
            return [...state.filter((post)=> {
                if (normalizeAuthor(post.author) === normalizeAuthor(filterTerm)) {
                    return post
                }
            })];
            break;
        case 'category':
            return [...state.filter((post)=> {
                if (post.tags.some((tag)=>(normalizeTag(tag) === normalizeTag(filterTerm)))) {
                    return post;
                }
            })];
            break;
        case 'month':
            return [...state.filter((post)=> {
                if (normalizeMonth(post.date) === filterTerm) {
                    return post;
                }
            })];
            break;
        case 'search':
            return [...state.filter((post)=> {
                if (
                    //testing if the post's author name includes part of the filter term
                _.includes(normalizeAuthor(post.author), normalizeAuthor(filterTerm)) ||
                //testing if one or more(some) of the post's tags includes part of the filter term
                post.tags.some((tag)=>_.includes(normalizeTag(tag), normalizeTag(filterTerm))) ||
                //testing if the post's dates includes part of the filter term
                _.includes(normalizeMonth(post.date), filterTerm) ||
                //testing if the post's descrisption includes part of the filter term
                _.includes(post.description.toLowerCase(), filterTerm)

                ) {
                    return post
                }
            })];
            break;

        default:
            return state;
    }
};


//SELECTOR used by the PostTableColumnTitile comp
export const getSortedBy =(state)=>{
    for (let key in state.sorting){
        if (state.sorting.hasOwnProperty(key)){
            if(state.sorting[key].sortedBy){
                return key
            }
        }
    }

}

//SELECTOR used by the PostTableColumnTitile comp

export const getDirection =(state)=>{
    for (let key in state.sorting){
        if (state.sorting.hasOwnProperty(key)){
            if(state.sorting[key].sortedBy){
                return state.sorting[key].direction
            }
        }
    }

}