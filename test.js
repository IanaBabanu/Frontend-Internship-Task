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

const initialStateLatest = {
  loading: false,
  error: null,
  data: [],
};

const initialStateDetails = {
  loading: false,
  error: null,
  data: [],
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

    default:
      return {
        ...initialState,
        error: payload,
      };
  }
};

const latestReducer = (state = initialStateLatest, { type, payload }) => {
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
        latest: payload,
      };

    default:
      return {
        ...initialState,
        error: payload,
      };
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
        upcoming: payload,
      };

    default:
      return {
        ...initialState,
        error: payload,
      };
  }
};

export default combineReducers({
  nowPlaying: nowPlayingReducer,
  latest: latestReducer,
  upcoming: upcomingReducer,
  selectedMovie: selectedMovieReducer,
});

import axios from "axios";

import { NOW_PLAYING, MOVIE_DETAILS } from "./actionTypes";

const apiKey = "fc298428bb77d2a10fb5e0bc411eb836";

export const fetchMovieDetailsSuccess = (payload) => ({
  type: MOVIE_DETAILS.FETCH_SUCCESS,
  payload,
});

export const fetchMovieDetailsFail = (error) => ({
  type: MOVIE_DETAILS.FETCH_FAIL,
  payload: error,
});

export const fetchMovieDetailsStart = () => ({
  type: MOVIE_DETAILS.FETCH_START,
});

export const fetchMovieDetails = (id) => async (dispatch) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
    .then((response) => {
      dispatch(fetchMovieDetailsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchNowPlayingMoviesFail(error));
    });
};

export const fetchNowPlayingMoviesSuccess = (payload) => ({
  type: NOW_PLAYING.FETCH_SUCCESS,
  payload,
});

export const fetchNowPlayingMoviesFail = (error) => ({
  type: NOW_PLAYING.FETCH_FAIL,
  payload: error,
});

export const fetchNowPlayingMoviesStart = () => ({
  type: NOW_PLAYING.FETCH_START,
});

export const fetchNowPlayingMovies = () => async (dispatch) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    .then((response) => {
      dispatch(fetchNowPlayingMoviesSuccess(response.data.results));
    })
    .catch((error) => {
      dispatch(fetchNowPlayingMoviesFail(error));
    });
};

export const fetchLatestMoviesSuccess = (payload) => ({
  type: NOW_PLAYING.FETCH_SUCCESS,
  payload,
});

export const fetchLatestMoviesFail = (error) => ({
  type: NOW_PLAYING.FETCH_FAIL,
  payload: error,
});

export const fetchLatestMoviesStart = () => ({
  type: NOW_PLAYING.FETCH_START,
});

export const fetchLatestMovies = () => async (dispatch) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}`)
    .then((response) => {
      dispatch(fetchLatestMoviesSuccess(response.data.results));
    })
    .catch((error) => {
      dispatch(fetchLatestMoviesFail(error));
    });
};
