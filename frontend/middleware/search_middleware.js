import { FETCH_SEARCH, receiveSearchResults } from '../actions/search_actions';
import { fetchSearch } from '../util/search_api_util';

const SearchMiddleware = ({getState, dispatch}) => next => action => {
  const receiveResults = results => dispatch(receiveSearchResults(results));
  switch(action.type) {
    case FETCH_SEARCH:
      fetchSearch(action.search, receiveResults);
      return next(action);
    default:
      return next(action);
  };
}

export default SearchMiddleware;
