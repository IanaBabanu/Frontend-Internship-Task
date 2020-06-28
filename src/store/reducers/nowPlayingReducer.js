import {
  NOW_PLAYING,
} from "../actions/types";

const initialState = {
  loading: false,
  error: null,
  data: [],
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
    case NOW_PLAYING.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default nowPlayingReducer;
