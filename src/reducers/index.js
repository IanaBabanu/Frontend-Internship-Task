import { combineReducers } from "redux";
import {
  NOW_PLAYING,
  MOVIE_DETAILS,
  LATEST,
  UPCOMING,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const initialStateDetails = {
  loading: false,
  error: null,
  data: [],
};

const nowPlayingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NOW_PLAYING.FETCH_START:
      return {
        ...initialState,
        loading: true,
      };

    case NOW_PLAYING.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case NOW_PLAYING.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

const latestReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LATEST.FETCH_START:
      return {
        ...initialState,
        loading: true,
      };

    case LATEST.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case LATEST.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

const upcomingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPCOMING.FETCH_START:
      return {
        ...initialState,
        loading: true,
      };

    case UPCOMING.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case UPCOMING.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const selectedMovieReducer = (
  state = initialStateDetails,
  { type, payload }
) => {
  switch (type) {
    case MOVIE_DETAILS.FETCH_START:
      return {
        ...initialState,
        loading: true,
      };

    case MOVIE_DETAILS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case MOVIE_DETAILS.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  nowPlaying: nowPlayingReducer,
  latest: latestReducer,
  upcoming: upcomingReducer,
  selectedMovie: selectedMovieReducer,
});
