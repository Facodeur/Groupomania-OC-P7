import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/api/user/profile`,
        withCredentials: true,
      })
      dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  }
}