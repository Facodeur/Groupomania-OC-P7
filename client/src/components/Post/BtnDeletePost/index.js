import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/post.action";
import { DeleteIcon } from "./BtnDeletePostElements";

const BtnDeletePost = ({ idPost }) => {
  const dispatch = useDispatch();

  const deleteQuote = () => {
    dispatch(deletePost(idPost));
  };

  return (
    <DeleteIcon
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer cet article ?")) {
          deleteQuote();
        }
      }}
    />
  );
};

export default BtnDeletePost;
