import axios from "axios";

export const GET_POSTS = "GET_POSTS";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/api/post`,
      withCredentials: true,
    });
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    return console.log(err);
  }
};