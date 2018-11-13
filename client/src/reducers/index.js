// indexReducer() determines the root values of state.

import { combineReducers } from 'redux';
import birdsReducer from './birdsReducer';
import loadingReducer from './loadingReducer.js';
import exerciseReducer from './exerciseReducer.js';
import browseReducer from './browseReducer.js';
import usersReducer from './usersReducer.js';


const rootReducer = combineReducers({
  birds: birdsReducer,
  exercise: exerciseReducer,
  browse: browseReducer,
  loading: loadingReducer,
  user: usersReducer,
});

export default rootReducer