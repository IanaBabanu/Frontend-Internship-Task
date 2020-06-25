import axios from "axios";

import { NOW_PLAYING, MOVIE_DETAILS, LATEST, UPCOMING } from "./actionTypes";

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
  type: LATEST.FETCH_SUCCESS,
  payload,
});

export const fetchLatestMoviesFail = (error) => ({
  type: LATEST.FETCH_FAIL,
  payload: error,
});

export const fetchLatestMoviesStart = () => ({
  type: LATEST.FETCH_START,
});

export const fetchLatestMovies = () => async (dispatch) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then((response) => {
      dispatch(fetchLatestMoviesSuccess(response.data.results));
    })
    .catch((error) => {
      dispatch(fetchLatestMoviesFail(error));
    });
};

export const fetchUpcomingMoviesSuccess = (payload) => ({
  type: UPCOMING.FETCH_SUCCESS,
  payload,
});

export const fetchUpcomingMoviesFail = (error) => ({
  type: UPCOMING.FETCH_FAIL,
  payload: error,
});

export const fetchUpcomingMoviesStart = () => ({
  type: UPCOMING.FETCH_START,
});

export const fetchUpcomingMovies = () => async (dispatch) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
    .then((response) => {
      dispatch(fetchUpcomingMoviesSuccess(response.data.results));
    })
    .catch((error) => {
      dispatch(fetchUpcomingMoviesFail(error));
    });
};
