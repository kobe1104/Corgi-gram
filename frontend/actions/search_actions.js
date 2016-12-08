export const FETCH_SEARCH = "FETCH_SEARCH";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";


export const fetchSearch = (search) => ({
  type: FETCH_SEARCH,
  search
});

export const receiveSearchResults = (results) => ({
  type: RECEIVE_RESULTS,
  results
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});
