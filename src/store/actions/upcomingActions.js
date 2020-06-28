import axios from "axios";
import { UPCOMING } from "./actionTypes";
import apiKey from "./api";

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
