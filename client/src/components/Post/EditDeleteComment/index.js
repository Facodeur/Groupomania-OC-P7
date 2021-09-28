import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, editComment } from "../../../actions/post.action";
import { UserContext } from "../../../context/UserContext";
import { DeleteIcon } from "../BtnDeletePost/BtnDeletePostElements";
import { IconWrap, UpdateIcon } from "../CardPost/CardPostElements";
import { BtnInput, BtnToCancel, Form, Input } from "./EditDeleteCommentElements";

const EditDeleteComment = ({ comment, postId }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const { authUser } = useContext(UserContext);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(editComment(postId, text, comment.id));
      setText("");
      setEdit(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteComment(postId, comment.id));
  };

  useEffect(() => {
    const checkAuthor = () => {
      if (authUser.id === comment.userId || authUser.isAdmin === 1) {
        setIsAuthor(true);
      }
    };
    if(authUser) {
      checkAuthor();
    }
    
  }, [authUser, comment.userId]);

  return (
    <>
      {isAuthor && edit === false && (
        <IconWrap>
          <UpdateIcon onClick={() => setEdit(!edit)} />
        </IconWrap>
      )}
      {isAuthor && edit && (
        <Form onSubmit={handleEdit}>
          <BtnToCancel onClick={() => setEdit(!edit)}>
            annuler
          </BtnToCancel>
          <Input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            defaultValue={comment.content}
          />
          <BtnInput type="submit" value="Valider" />
          <DeleteIcon
            onClick={() => {
              if (window.confirm("Voulez-vous supprimer ce commentaire ?")) {
                handleDelete();
              }
            }}
          />
        </Form>
      )}
    </>
  );
};

export default EditDeleteComment;
