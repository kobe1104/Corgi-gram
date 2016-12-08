import { RECEIVE_RESULTS, CLEAR_SEARCH } from '../actions/search_actions'
import { merge } from 'lodash';

const default_state = []

const SearchReducer = (state = default_state, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESULTS:
      const searchResults = action.results.searchResults;
      return searchResults;
    case CLEAR_SEARCH:
      return default_state;
    default:
      return state;
  }
};

export default SearchReducer;
