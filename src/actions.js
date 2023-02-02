import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const FAV_ADD = "FAV_ADD";
export const FAV_REMOVE = "FAV_REMOVE";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const INITIAL_CURRENT = "INITIAL_CURRENT";

export const addFav = (info) => {
  return { type: FAV_ADD, payload: info };
};

export const removeFav = (info) => {
  return { type: FAV_REMOVE, payload: info };
};

export const fetchAnother = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get("https://catfact.ninja/fact")
    .then((response) =>
      dispatch({ type: FETCH_SUCCESS, payload: response.data.fact })
    )
    .catch((error) => dispatch({ type: FETCH_ERROR, payload: error }));
};

export const initialCurrent = () => (dispatch) => {
  axios
    .get("https://catfact.ninja/fact")
    .then((response) =>
      dispatch({
        type: INITIAL_CURRENT,
        payload: response.data.fact,
      })
    )
    .catch((error) => dispatch({ type: FETCH_ERROR, payload: error }));
};
