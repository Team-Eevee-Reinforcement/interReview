import { combineReducers } from 'redux';

// import all reducers here
import intReducer from './interviewReducer';

// combine reducers
const reducers = combineReducers({
  interview: intReducer,
});

// make the combined reducers available for import
export default reducers;