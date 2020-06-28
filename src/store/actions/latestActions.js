import axios from "axios";
import { LATEST } from "./actionTypes";
import apiKey from "./api";

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
  dispatch(fetchLatestMoviesStart());

  return axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then((response) => {
      dispatch(fetchLatestMoviesSuccess(response.data.results));
    })
    .catch((error) => {
      dispatch(fetchLatestMoviesFail(error));
    });
};
