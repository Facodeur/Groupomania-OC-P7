import {
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_COMMENT,
  GET_POSTS,
  UPDATE_POST,
} from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;

    case UPDATE_POST:
      return state.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            ...post,
            content: action.payload.content,
          };
        } else return post;
      });

    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload.postId);

    case EDIT_COMMENT:
      return state.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            ...post,
            Comments: post.Comments.map((comment) => {
              if (comment.id === action.payload.idComment) {
                return {
                  ...comment,
                  content: action.payload.content,
                };
              } else return comment;
            }),
          };
        } else return post;
      });

    case DELETE_COMMENT:
      return state.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            ...post,
            Comments: post.Comments.filter(
              (comment) => comment.id !== action.payload.idComment
            ),
          };
        } else return post;
      });

    default:
      return state;
  }
}
