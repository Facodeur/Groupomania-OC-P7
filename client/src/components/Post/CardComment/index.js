import React, { useContext } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getPosts } from "../../../actions/post.action";
import { UserContext } from "../../../context/UserContext";
import { dateParser } from "../../../utils/date-parser";
import {
  CardContainer,
  CardHeader,
  CardUsername,
  DatePosted,
  Icon,
} from "../CardPost/CardPostElements";
import EditDeleteComment from "../EditDeleteComment";
import { BtnSend, Form, Input } from "./CardCommentElements";

const CardComment = ({ post }) => {
  const { authUser } = useContext(UserContext);
  const usersData = useSelector((state) => state.usersReducer);
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
                  {usersData && usersData.map((user) => {
                    if (user.id === comment.userId) {
                      return user.username;
                    } else return null;
                  })}
                </p>
              </CardUsername>
              <DatePosted>{dateParser(comment.createdAt)}</DatePosted>
            </CardHeader>
            <p>{comment.content}</p>
            <EditDeleteComment comment={comment} postId={post.id} />
          </CardContainer>
        );
      })}
      {authUser && (
        <Form onSubmit={handleComment}>
          <Input
            type="text"
            name="text"
            value={text}
            placeholder="Laisser un commentaire"
            onChange={(e) => setText(e.target.value)}
          />
          <BtnSend type="submit" value="Envoyer" />
        </Form>
      )}
    </ul>
  );
};

export default CardComment;
