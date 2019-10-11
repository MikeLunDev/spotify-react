export const handleIsPlaying = () => {
  return (dispatch, getState) => {
    const state = getState();
    console.log(state.isPlaying);
    dispatch({
      type: "IS_PLAYING",
      payload: !state.isPlaying
    });
  };
};
