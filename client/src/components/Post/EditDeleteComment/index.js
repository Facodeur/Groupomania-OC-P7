import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, editComment } from "../../../actions/post.action";
import { UserContext } from "../../../context/UserContext";
import { DeleteIcon } from "../BtnDeletePost/BtnDeletePostElements";
import { IconWrap, UpdateIcon } from "../CardPost/CardPostElements";

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
      if (authUser === comment.userId) {
        setIsAuthor(true);
      }
    };
    checkAuthor();
  }, [authUser, comment.userId]);

  return (
    <>
      {isAuthor && edit === false && (
        <IconWrap>
          <UpdateIcon onClick={() => setEdit(!edit)} />
        </IconWrap>
      )}
      {isAuthor && edit && (
        <form onSubmit={handleEdit}>
          <label htmlFor="text" onClick={() => setEdit(!edit)}>
            annuler
          </label>
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            defaultValue={comment.content}
          />
          <input type="submit" value="Valider modifications" />
          <DeleteIcon
            onClick={() => {
              if (window.confirm("Voulez-vous supprimer ce commentaire ?")) {
                handleDelete();
              }
            }}
          />
        </form>
      )}
    </>
  );
};

export default EditDeleteComment;
