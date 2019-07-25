import axios from "axios"

export const API_FETCH_START = "API_FETCH_START";
export const API_FETCH_SUCCESS = "API_FETCH_SUCCESS";
export const API_FETCH_FAILURE = "API_FETCH_FAILURE";

export const fetchApiData = () => dispatch => {
  dispatch({ type: API_FETCH_START });

  axios
    .get("https://rickandmortyapi.com/api/character")
    .then(res => {
      dispatch({ type: API_FETCH_SUCCESS, payload: res.data.results });
    })
    .error(err => console.log(err));
  dispatch({ type: API_FETCH_FAILURE });
};
