import { combineReducers } from 'redux';
import { projectReducer } from './reducers/projectReducer';
import { errorReducer } from './reducers/errorReducer';


export default combineReducers({
  errors: errorReducer,
  project: projectReducer,
});
