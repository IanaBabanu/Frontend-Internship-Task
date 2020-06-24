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


