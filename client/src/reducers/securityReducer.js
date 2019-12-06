import { SET_CURRENT_USER, LOGOUT } from "../actions/types";

const initialState = {
  validToken: false,
  user: {}
};

const booleanActionPayload = payload => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        validToken: booleanActionPayload(action.payload),
        user: action.payload
      };

    case LOGOUT:
      return {
        ...state,
        validToken: booleanActionPayload(action.payload.token),
        user: action.payload.user
      }
  
    default:
      return state;
  }
}