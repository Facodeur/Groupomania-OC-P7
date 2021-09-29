import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/post.action";
import Modal from "../../Modal";
import { Button, DeleteIcon } from "./BtnDeletePostElements";

const BtnDeletePost = ({ idPost }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const deleteQuote = () => {
    dispatch(deletePost(idPost));
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <p>Confirmez-vous la suppression du post ?</p>
        <Button onClick={deleteQuote}>Supprimer</Button>
      </Modal>
      <DeleteIcon onClick={() => setShowModal(!showModal)} />
    </>
  );
};

export default BtnDeletePost;
