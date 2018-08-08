import { combineReducers } from 'redux';
import birdsReducer from './birdsReducer';
import loadingReducer from './loadingReducer.js';

const rootReducer = combineReducers({
  birds: birdsReducer,
  loading: loadingReducer,
});

export default rootReducer