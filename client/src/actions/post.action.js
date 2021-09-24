import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

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
};

export const updatePost = (postId, content) => {
  return (dispatch) => {
    return axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}/api/post/${postId}`,
      withCredentials: true,
      data: { content },
    })
      .then((res) => {
        dispatch({ type: UPDATE_POST, payload: { content, postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    return axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}/api/post/${postId}`,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};
