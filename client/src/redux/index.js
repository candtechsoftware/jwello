import { combineReducer } from 'redux';
import { projectReducer } from '../reducers/project';
import { errorReducer } from '../reducers/errors';


export default combineReducer({
  errors: errorReducer,
  project: projectReducer,
});