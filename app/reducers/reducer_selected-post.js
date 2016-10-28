import {GET_SELECTED_POST} from '../actions/get-selected-post'

const selectedPost = (state = {}, action) => {
    switch (action.type) {
        case GET_SELECTED_POST:
            // finding the index of the specific post based on its name as it is passed on the URLs params
            let postIndex = action.payload.posts.findIndex((post)=>
                //the toUpperCase is used in order for the comparison to return true even if there are case-typos
                // on the URL params.
                removeNonLetters(post.title).toUpperCase() === action.payload.postTitle.toUpperCase());

            return action.payload.posts[postIndex];
    }

    return state;
};


//function which uses RegEx:
//the first replace()  replaces all the non-alphanumeric strings with whitespace
//the second replace() replaces all the whitespace with dashes
//!NOT SURE IF THIS IS THE RIGHT PLACE TO DEFINE THIS FUNCTION

function removeNonLetters(str){
    return str.replace(/[^\w]/g,' ').replace(/\s+/g, '-');
}


export default selectedPost;

