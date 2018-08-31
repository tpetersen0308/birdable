// browseReducer() determines the value of birdSelection in state

import { combineReducers } from 'redux';
import birdsForBrowseReducer from './birdsForBrowseReducer.js';

const browseReducer = combineReducers({
  birdSelection: birdsForBrowseReducer,
});

export default browseReducer;