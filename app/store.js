import { createStore, combineReducers, applyMiddleware } from 'redux';
import {activeSection} from './reducers/reducer_main-navigation'
import {getPosts} from './reducers/reducer-posts'

const reducers = combineReducers({
  // Reducers go here
    activeSection,
    getPosts

});

const store = createStore(reducers);

export default store;
