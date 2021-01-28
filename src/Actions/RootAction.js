import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from "../Actions/Actions";
import axios from "axios";

export const fetchCountries = () => (dispatch, getState) => {
  dispatch({ type: FETCH_COUNTRIES_REQUEST });

  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then((res) => {
      dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_COUNTRIES_FAILURE, error });
    });
};
