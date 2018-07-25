import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL
} from './constants.js'

const initialState = {
	searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD: 
			return Object.assign({}, state, { searchField: action.payload });
		default:
			return state;
	}
} 

// create new reducer
export const requestRobots = (state=initialState, action={}) => {
	switch(){
		case REQUEST_ROBOTS_PENDING:
		return 
	}
}