import {GET_POSTS} from '../actions/get-posts';
export const getPosts = (state = [], action) => {
    
    switch(action.type) {
        case GET_POSTS:
            return action.payload.data;
    }

    return state;
};


