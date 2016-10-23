import { createStore, combineReducers} from 'redux';
import {activeSection} from './reducers/reducer_main-navigation'
import {posts} from './reducers/reducer-posts'
import data from '../data/posts.json';





const reducers = combineReducers({
  // Reducers go here
    activeSection,
    posts

});

//initializing the store with the existing posts in the JSON
const persistedState = {
    posts : data
};

const store = createStore(reducers, persistedState);


export default store;
