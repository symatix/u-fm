import { SET_SEARCH_RESULTS } from '../constants';

export const searchResults = (searchResults) => {
	return { type: SET_SEARCH_RESULTS, payload: searchResults }
}