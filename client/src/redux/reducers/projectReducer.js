import { GET_PROJECTS, GET_PROJECT} from "../types";

const initialState = {
	projects: [],
	project: {},
};

export const projectReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PROJECTS:
			return {
				...state,
				projects: action.payload,
			};
			case GET_PROJECT:
				return {
					...state,
					project: action.payload,
				}

		default:
			return state;
	}
}project;
