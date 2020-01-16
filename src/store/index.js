import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import songReducer from "../reducers/songs";
import errorReducer from "../reducers/error";
import albumReducer from "../reducers/album";
import playlistReducer from "../reducers/playlist";
import isPlayingReducer from "../reducers/isPlaying";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  songs: {},
  error: {
    fetchError: false,
    message: "",
    statusCode: null
  },
  album: {},
  playlist: [],
  isPlaying: ""
};

const bigReducer = combineReducers({
  songs: songReducer,
  error: errorReducer,
  album: albumReducer,
  playlist: playlistReducer,
  isPlaying: isPlayingReducer
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
