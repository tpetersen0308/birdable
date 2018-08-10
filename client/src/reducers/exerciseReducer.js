import { combineReducers } from 'redux';
import birdSelectionReducer from './birdSelectionReducer.js';
import problemReducer from './problemReducer.js';
import userAnswerReducer from './userAnswerReducer.js';

const exerciseReducer = combineReducers({
  birdSelection: birdSelectionReducer,
  problem: problemReducer,
  userAnswer: userAnswerReducer,
});

export default exerciseReducer;