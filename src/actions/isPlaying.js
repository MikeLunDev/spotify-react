export const handleIsPlaying = id => {
  return (dispatch, getState) => {
    console.log(id);
    dispatch({
      type: "IS_PLAYING",
      payload: id
    });
  };
};
