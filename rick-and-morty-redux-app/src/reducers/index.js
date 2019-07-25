import {
  API_FETCH_START,
  API_FETCH_SUCCESS,
  API_FETCH_FAILURE
} from "../actions";

const initialState = {
  cards: [],
  isFetching: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
      case API_FETCH_START:
      return { 
        ...state,
        isFetching: true 
       };
       case API_FETCH_SUCCESS:
       return {
           ...state,
           isFetching: false,
           cards: action.payload
       }
    default:
      return state;
  }
};
