import {createStore} from 'redux';

import data from '../../data/posts.json';
import reducers from '../reducers/reducer-root';


//sorting the posts data from newest to oldest

const postsData = data.posts.sort((a, b)=>(b.date.localeCompare(a.date)));
//setting the stores initial state for some of the properties:
const persistedState = {
    //initializing the store with the existing posts in the JSON under posts
    posts: {
        arr: postsData,
        sortedBy: 'date'
    }
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

