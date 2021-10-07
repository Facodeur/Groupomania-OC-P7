import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { IconLike, IconUnlike } from "./BtnLikePostElements";
import Modal from "../../Modal";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../../actions/post.action";

const BtnLikePost = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const { authUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const like = () => {
    dispatch(likePost(post.id));
    setLiked(true);
  };

  const unlike = () => {
    dispatch(unlikePost(authUser.id, post.id));
    setLiked(false);
  };

  useEffect(() => {
    const checkUserLikePost = () => {
      const userExist = post.Likes.find((like) => like.userId === authUser.id);

      if (userExist) setLiked(true);
      else setLiked(false);
    };

    if (authUser) {
      checkUserLikePost();
    }
  }, [authUser, post.Likes, liked]);

  return (
    <>
      {authUser === null && (
        <>
          <IconUnlike onClick={() => setShowModal(!showModal)} />
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <p>Connectez-vous pour aimer le post</p>
          </Modal>
        </>
      )}

      {authUser && liked === false && <IconUnlike onClick={like} />}
      {authUser && liked && <IconLike onClick={unlike} />}
    </>
  );
};

export default BtnLikePost;
