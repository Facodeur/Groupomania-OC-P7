import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../actions/post.action";
import { BtnValidUpdate, UpdatTextarea } from "./BtnUpdatePostElement";

const BtnUpdatePost = ({ post, setIsUpdated }) => {
  const dispatch = useDispatch();
  const [textUpdate, setTextUpdate] = useState(null);

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(post.id, textUpdate));
    }
    setIsUpdated(false);
  };
  return (
    <>
      <UpdatTextarea
        defaultValue={post.content}
        onChange={(e) => setTextUpdate(e.target.value)}
      />
      <BtnValidUpdate onClick={updateItem}>Valider les modifications</BtnValidUpdate>
    </>
  );
};

export default BtnUpdatePost;
