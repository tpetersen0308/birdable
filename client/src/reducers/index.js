import { combineReducers } from 'redux';
import birdReducer from './birdReducer';
import loadingReducer from './loadingReducer.js';
import exerciseReducer from './exerciseReducer.js';
import browseReducer from './browseReducer.js';
import usersReducer from './usersReducer.js';


const rootReducer = combineReducers({
  randomBird: birdReducer,
  exercise: exerciseReducer,
  browse: browseReducer,
  loading: loadingReducer,
  user: usersReducer,
});

export default rootReducer