import {combineReducers} from 'redux'
import posts, * as fromPosts from '../reducers/reducer-posts';

const reducers = combineReducers({
    // Reducers go here
    posts
});

export default reducers;

//added these exports as part of the 'using Selectors' refactoring 
//(explained here: https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers)
export const getSelectedPost = (state, postTitle)=>
    fromPosts.getSelectedPost(state.posts.arr,postTitle);

export const getFilteredPosts = (state, filterTerm, queryVar) =>
    fromPosts.getFilteredPosts(state.posts.arr,filterTerm,queryVar);


export const getSortedBy = (state) =>
	    fromPosts.getSortedBy(state.posts);


export const getDirection = (state) =>
   	fromPosts.getDirection(state.posts);
