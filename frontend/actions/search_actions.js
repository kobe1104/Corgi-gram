export const FETCH_SEARCH = "FETCH_SEARCH";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";


export const fetchSearch = (search) => ({
  type: FETCH_SEARCH,
  search
});

export const receiveSearchResults = (results) => ({
  type: RECEIVE_RESULTS,
  results
});
