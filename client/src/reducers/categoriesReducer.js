import { FETCHED_CATEGORIES } from "../actions/types";

const initialState = {
  categories: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHED_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };

    default:
      return state;
  }
}