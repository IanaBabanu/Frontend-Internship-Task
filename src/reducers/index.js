import { combineReducers } from "redux";
import { NOW_PLAYING, MOVIE_DETAILS } from "../actions/actionTypes";

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

const moviesReducer = (state = initialState, { type, payload }) => {
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

    default:
      return {
        ...initialState,
        error: payload,
      };
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

    default:
      return {
        ...initialState,
        error: payload,
      };
  }
};

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});
