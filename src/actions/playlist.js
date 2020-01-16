export const handleAddSongToPlaylist = (track, album) => {
  return (dispatch, getState) => {
    const { playlist } = getState();
    const { title, cover_small } = album;
    const toSend = { ...track, title, cover_small };
    const songIndex = playlist.findIndex(el => el.id === track.id);
    return songIndex !== -1
      ? //if the song is already in the playlist just make it first in order to play it
        dispatch({
          type: "ADD_SONG_TO_PLAYLIST",
          payload: [].concat(
            playlist[songIndex],
            playlist.slice(0, songIndex),
            playlist.slice(songIndex + 1)
          )
        })
      : dispatch({
          type: "ADD_SONG_TO_PLAYLIST",
          payload: [toSend, ...playlist]
        });
  };
};
