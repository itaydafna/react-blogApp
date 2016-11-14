import {createStore, combineReducers} from 'redux';
import posts from './reducers/reducer-posts';

import data from '../data/posts.json';


const reducers = combineReducers({
    // Reducers go here
    posts
});

//sorting the posts data from newest to oldest

const postsData = data.posts.sort((a, b)=>(Number(b.date) - Number(a.date)));
//setting the stores initial state for some of the properties:
const persistedState = {
    //initializing the store with the existing posts in the JSON under posts
    posts: postsData
};

const store = createStore(reducers, persistedState);

//function logging the store's state
function logStore() {
    console.log(store.getState())
};

//subscribing to the store so it's state will be logged on every dispatch
store.subscribe(logStore);

logStore();

export default store;
