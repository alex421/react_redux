//root reducer

import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses  //using es6 short name property name
});

export default rootReducer;
