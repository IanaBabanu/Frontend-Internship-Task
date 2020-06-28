import { combineReducers } from "redux";

import selectedMovieReducer from "./reducers/movieDetailsReducer";
import upcomingReducer from "./reducers/upcomingReducer";
import latestReducer from "./reducers/latesteReducer";
import nowPlayingReducer from "./reducers/latesteReducer";

export const rootReducer = combineReducers({
  nowPlaying: nowPlayingReducer,
  latest: latestReducer,
  upcoming: upcomingReducer,
  selectedMovie: selectedMovieReducer,
})