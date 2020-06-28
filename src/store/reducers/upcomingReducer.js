import {
  UPCOMING,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  data: [],
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
        data: payload,
      };

    case UPCOMING.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default upcomingReducer;
