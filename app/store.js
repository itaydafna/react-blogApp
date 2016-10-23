import { createStore, combineReducers} from 'redux';
import {activeSection} from './reducers/reducer_main-navigation'
import {posts} from './reducers/reducer-posts'
import {visiblePreviews} from './reducers/reducer-visible-previews'
import data from '../data/posts.json';



const reducers = combineReducers({
  // Reducers go here
    activeSection,
    posts,
    visiblePreviews

});

const postsData = data.posts;

//initializing the store with the existing posts in the JSON
const persistedState = {
    posts : postsData,
    visiblePreviews: postsData.slice(postsData.length-3)
};

const store = createStore(reducers, persistedState);

console.log(store.getState());

export default store;
