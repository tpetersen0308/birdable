import { combineReducers } from 'redux';
import birdsForBrowseReducer from './birdsForBrowseReducer.js';

const browseReducer = combineReducers({
  birdSelection: birdsForBrowseReducer,
});

export default browseReducer;