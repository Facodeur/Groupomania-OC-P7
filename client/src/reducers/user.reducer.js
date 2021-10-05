import { DELETE_USER, GET_USER, LOGOUT } from "../actions/user.actions";
import { removeCookie } from "../utils/utils";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    case LOGOUT:
      removeCookie("jwt")
      return {
        user: null,
      }

    case DELETE_USER:
      return action.payload;

    default:
      return state;
  }
}