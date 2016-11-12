import {createStore, combineReducers} from 'redux';
import posts from './reducers/reducer-posts'
import visiblePreviews from './reducers/reducer-visible-previews'
import selectedPost from './reducers/reducer_selected-post'
import filteredPosts from './reducers/reducer-filtered-posts'

import data from '../data/posts.json';


const reducers = combineReducers({
    // Reducers go here
    posts,
    filteredPosts,
    selectedPost,
    visiblePreviews
});

//sorting the posts data from newest to oldest

const postsData = data.posts.sort((a, b)=>(Number(b.date) - Number(a.date)));

//setting the stores initial state for some of the properties:
const persistedState = {
    //initializing the store with the existing posts in the JSON under posts
    posts: postsData,
    filteredPosts: {
        filteredPostsArray: postsData
    },
    visiblePreviews: {
        tracking: {
                //calculating the total number of post preview pages
                numberOfPages: postsData%3 === 0 ?
                (postsData.length - postsData.length%3)/3 :
                    1+(postsData.length - postsData.length%3)/3
        }
    }
};

const store = createStore(reducers, persistedState);

//function logging the store's state
function logStore(){console.log(store.getState())};

//subscribing to the store so it's state will be logged on every dispatch
store.subscribe(logStore);

logStore();

export default store;
