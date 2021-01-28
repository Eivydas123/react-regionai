import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from "../Actions/Actions";

const initState = {
  countries: [],
  loading: false,
  error: null,
};

export const RootReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_COUNTRIES_SUCCESS:
      return { ...state, loading: false, countries: action.payload };
    case FETCH_COUNTRIES_FAILURE:
      return { ...state, loading: false, error: action.errors };
    default:
      return state;
  }
};
