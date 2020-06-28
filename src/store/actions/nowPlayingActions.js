import axios from "axios";
import { NOW_PLAYING } from "./actionTypes";
import apiKey from './api';

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
  dispatch(fetchNowPlayingMoviesStart());

  return axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    .then((response) => {
      dispatch(fetchNowPlayingMoviesSuccess(response.data.results));
    })
    .catch((error) => {
      dispatch(fetchNowPlayingMoviesFail(error));
    });
};