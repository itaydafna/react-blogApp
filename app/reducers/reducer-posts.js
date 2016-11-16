import {normalizeAuthor, normalizeTag, removeNonLetters} from '../assets/UTILS'

const posts = (state = [], action) => {
    return state;
};

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


