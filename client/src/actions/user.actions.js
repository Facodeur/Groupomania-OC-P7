import axios from "axios";

export const GET_USER = "GET_USER";
export const LOGOUT = "LOGOUT";
export const DELETE_USER = "DELETE_USER";

export const getUser = () => async (dispatch) => {
  try {
    const res = await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/user/profile`,
      withCredentials: true,
    });
    dispatch({ type: GET_USER, payload: res.data });
  } catch (err) {
    return console.log(err);
  }
};

export const logout = () => async (dispatch) => {
  try {
    const res = await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/user/logout`,
      withCredentials: true,
    });
    dispatch({ type: LOGOUT, payload: res.data });
  } catch (err) {
    return console.log(err);
  }
};

export const deleteUser = (uid) => async (dispatch) => {
  try {
    const res = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/api/user/${uid}`,
      withCredentials: true,
    });
    dispatch({ type: DELETE_USER, payload: res.data });
  } catch (err) {
    return console.log(err);
  }
};
