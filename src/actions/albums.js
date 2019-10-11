import { FETCH_PARAMS, FETCH_ALBUM_URL } from "./fetchParameters";

export const handleGetAlbum = id => {
  return async (dispatch, getState) => {
    var response = await fetch(FETCH_ALBUM_URL + id, FETCH_PARAMS);
    var json = await response.json();
    return response.ok
      ? dispatch({
          type: "ADD_ALBUM",
          payload: json,
          id: id
        })
      : dispatch({
          type: "ERROR",
          message: json.message,
          statusCode: ` ${response.status} ${response.statusText}`
        });
  };
};
