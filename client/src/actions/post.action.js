import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";

export const getPosts = (num) => async (dispatch) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/api/post`,
      withCredentials: true,
    });
    const array = res.data.slice(0, num);
    dispatch({ type: GET_POSTS, payload: array });
  } catch (err) {
    return console.log(err);
  }
};

export const addPost = (data) => async (dispatch) => {
  try {
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/api/post`,
      withCredentials: true,
      data: data,
    });
  } catch (err) {
    return console.log(err);
  }
}
