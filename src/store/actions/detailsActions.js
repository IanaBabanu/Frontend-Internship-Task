import axios from "axios";
import apiKey from './api';
import { MOVIE_DETAILS } from "./actionTypes";

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
  dispatch(fetchMovieDetailsStart());

  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
    .then((response) => {
      dispatch(fetchMovieDetailsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchMovieDetailsFail(error));
    });
};

