import { createStore, combineReducers } from 'redux';
import {activeSection} from './reducers/reducer_main-navigation'

const reducers = combineReducers({
  // Reducers go here
    activeSection
});

const store = createStore(reducers);

export default store;
