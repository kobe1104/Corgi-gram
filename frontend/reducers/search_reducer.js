import { RECEIVE_RESULTS } from '../actions/search_actions'
import { merge } from 'lodash';

const SearchReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESULTS:
      const searchResults = action.results.searchResults;
      return searchResults;
    default:
      return state;
  }
};

export default SearchReducer;
