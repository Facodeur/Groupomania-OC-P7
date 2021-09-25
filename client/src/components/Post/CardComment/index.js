import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getPosts } from "../../../actions/post.action";
import { dateParser } from "../../../utils/date-parser";
import {
  CardContainer,
  CardHeader,
  CardUsername,
  DatePosted,
  Icon,
} from "../CardPost/CardPostElements";

const CardComment = ({ post }) => {
  const usersData = useSelector((state) => state.usersReducer);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  
  const [text, setText] = useState("");

  const handleComment = (e) => {
    e.preventDefault();

    if(text) {
      dispatch(addComment(post.id, text))
      .then(() => dispatch(getPosts()))
      .then(() => setText(''))
    }
  };

  return (
    <ul>
      {post && post.Comments.map((comment) => {
        return (
          <CardContainer key={comment.id}>
            <CardHeader>
              <CardUsername>
                <Icon />
                <p>
                  {usersData.map((user) => {
                    if (user.id === comment.userId) {
                      return user.username;
                    }
                  })}
                </p>
              </CardUsername>
              <DatePosted>{dateParser(comment.createdAt)}</DatePosted>
            </CardHeader>
            <p>{comment.content}</p>
          </CardContainer>
        );
      })}
      {user.id && (
        <form onSubmit={handleComment}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Laisser un commentaire"
            onChange={(e) => setText(e.target.value)}
          />
          <input type="submit" value="Envoyer" />
        </form>
      )}
    </ul>
  );
};

export default CardComment;
