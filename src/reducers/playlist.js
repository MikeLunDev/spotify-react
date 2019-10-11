export default function albumReducer(state = [], action) {
  console.log("payload", action.payload);
  switch (action.type) {
    case "ADD_SONG_TO_PLAYLIST":
      return action.payload;

    default:
      return state;
  }
}
