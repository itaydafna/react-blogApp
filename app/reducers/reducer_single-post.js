import {GET_SINGLE_POST} from '../actions/get-single-post'

const singlePost = (state = {}, action) => {
    switch (action.type) {
        case GET_SINGLE_POST:
            // finding the index of the specific post based on its name as it is passed on the URLs params
            let postIndex = action.payload.posts.findIndex((post)=>
            //the toUpperCase is used in order for the comparison to return true even if there are case-typos
            // on the URL params.
                removeNonLetters(post.title).toUpperCase() === action.payload.postTitle.toUpperCase());

            return action.payload.posts[postIndex];
    }

    return state;
};


//function which usese RegEx to remove all non-Letters (and whitespaces) except dash from a string
// found it here: http://stackoverflow.com/questions/11405911/add-exception-to-regex
//!NOT SURE IF THIS IS THE RIGHT PLACE TO DEFINE THIS FUNCTION

export function removeNonLetters(str){
    return str.replace(/[^0-9\-]/g,'');
}


export default singlePost;

