export default function albumReducer(state = false, action) {
  switch (action.type) {
    case "IS_PLAYING":
      return action.payload;
    default:
      return state;
  }
}
