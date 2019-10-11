export const handleAddSongToPlaylist = (track, album) => {
  return (dispatch, getState) => {
    const { playlist } = getState();
    const { title, cover_small } = album;
    const toSend = { ...track, title, cover_small };
    return playlist.find(el => el.id === track.id)
      ? dispatch({
          type: "ADD_SONG_TO_PLAYLIST",
          payload: [...playlist]
        })
      : dispatch({
          type: "ADD_SONG_TO_PLAYLIST",
          payload: [...playlist, toSend]
        });
  };
};
