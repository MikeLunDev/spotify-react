export default function albumReducer(state = [], action) {
  switch (action.type) {
    case "ADD_SONG_TO_PLAYLIST":
      return action.payload;
    default:
      return state;
  }
}
