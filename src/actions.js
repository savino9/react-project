import { CHANGE_SEARCH_FIELD} from './contants.js';

export const setSearchField = (text) => ({
	type:'CHANGE_SEARCH_FIELD',
	payload: text
})