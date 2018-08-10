import { combineReducers } from 'redux';
import birdsReducer from './birdsReducer';
import loadingReducer from './loadingReducer.js';
import birdSelectionReducer from './birdSelectionReducer.js';
import exerciseReducer from './exerciseReducer.js';
import solutionReducer from './solutionReducer.js';

const rootReducer = combineReducers({
  birds: birdsReducer,
  exercise: {
    birdSelection: birdSelectionReducer,
    problem: exerciseReducer,
    solution: solutionReducer,
  },
  loading: loadingReducer,
});

export default rootReducer