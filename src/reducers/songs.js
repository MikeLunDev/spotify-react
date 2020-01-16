export default function(state = {}, action) {
  switch (action.type) {
    case "ADD_SONGS":
      return {
        ...state,
        [action.text]: [...action.payload]
      };
    case "SEARCH_SONGS":
      return {
        [action.text]: [...action.payload]
      };
    default:
      return state;
  }
}
