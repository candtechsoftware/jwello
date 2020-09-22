import {GET_PROJECTS} from '../types';


const initialState = {
  projects: [],
  project: {},
};


export const projectReducer = (state = initialState, action={}) => {
  const { type, payload } = action;
  switch (type) {
   case GET_PROJECTS:
     return {
       ...state,
       projects: payload
     };
   default:
     return state;
 }
};
