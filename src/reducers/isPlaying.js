export default function isPlayingReducer(state = "", action) {
  switch (action.type) {
    case "IS_PLAYING":
      return action.payload;
    default:
      return state;
  }
}
