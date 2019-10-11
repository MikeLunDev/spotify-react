export default function albumReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_ALBUM":
      return {
        ...action.payload
      };

    default:
      return state;
  }
}
