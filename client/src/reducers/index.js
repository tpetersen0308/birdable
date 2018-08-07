import { combineReducers } from 'redux';
import birdsReducer from './birdsReducer';

const rootReducer = combineReducers({
  birds: birdsReducer,
});

export default rootReducer