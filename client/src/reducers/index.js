import { combineReducers } from 'redux';
import birdsReducer from './birdsReducer';
import loadingReducer from './loadingReducer.js';
import exerciseReducer from './exerciseReducer.js';


const rootReducer = combineReducers({
  birds: birdsReducer,
  exercise: exerciseReducer,
  loading: loadingReducer,
});

export default rootReducer