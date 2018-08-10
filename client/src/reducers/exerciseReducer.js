import { combineReducers } from 'redux';
import birdSelectionReducer from './birdSelectionReducer.js';
import problemReducer from './problemReducer.js';
import solutionReducer from './solutionReducer.js';

const exerciseReducer = combineReducers({
  birdSelection: birdSelectionReducer,
  problem: problemReducer,
  solution: solutionReducer,
});

export default exerciseReducer;