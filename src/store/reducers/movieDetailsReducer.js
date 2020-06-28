import {
  MOVIE_DETAILS,
} from "../actions/actionTypes";

const initialStateDetails = {
  loading: false,
  error: null,
  data: {},
};

const selectedMovieReducer = (
  state = initialStateDetails,
  { type, payload }
) => {
  switch (type) {
    case MOVIE_DETAILS.FETCH_START:
      return {
        ...initialStateDetails,
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

export default selectedMovieReducer;
