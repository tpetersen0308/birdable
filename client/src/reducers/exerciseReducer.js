/*
    exerciseReducer() determines the values of birdSelection, problem,
    and userAnswer in state.
*/

import { combineReducers } from 'redux';
import birdsForExerciseReducer from './birdsForExerciseReducer.js';
import problemReducer from './problemReducer.js';
import userAnswerReducer from './userAnswerReducer.js';
import exerciseTypeReducer from './exerciseTypeReducer.js';

const exerciseReducer = combineReducers({
  birdSelection: birdsForExerciseReducer,
  problem: problemReducer,
  userAnswer: userAnswerReducer,
  type: exerciseTypeReducer,
});

export default exerciseReducer;