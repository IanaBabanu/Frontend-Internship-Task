import { LATEST } from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  data: [],
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

export default latestReducer;
