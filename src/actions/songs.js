import { FETCH_PARAMS, FETCH_SEARCH_URL } from "./fetchParameters";

export const handleGetSongs = query => {
  return async (dispatch, getState) => {
    var response = await fetch(FETCH_SEARCH_URL + query, FETCH_PARAMS);
    var json = await response.json();
    return response.ok
      ? dispatch({
          type: "ADD_SONGS",
          payload: json.data.slice(0, 15),
          text: query
        })
      : dispatch({
          type: "ERROR",
          message: json.message,
          statusCode: ` ${response.status} ${response.statusText}`
        });
  };
};
