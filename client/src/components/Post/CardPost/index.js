import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateParser } from "../../../utils/date-parser";
import { FaSpinner } from "react-icons/fa";
import BtnDeletePost from "../BtnDeletePost";
import BtnUpdatePost from "../BtnUpdatePost";
import {
  CardContainer,
  DatePosted,
  CardHeader,
  Icon,
  CardUsername,
  LoadingIcon,
  CardText,
  CardPicture,
  CardFooter,
  IconComment,
  IconWrap,
  UpdateIcon,
} from "./CardPostElements";
import CardComment from "../CardComment";

const CardPost = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const userData = useSelector((state) => state.userReducer);

  console.log(post);

  useEffect(() => {
    post && setIsLoading(false);
  }, [post]);

  return (
    <CardContainer>
      {isLoading ? (
        <LoadingIcon>
          <FaSpinner className="fa-spin" />
        </LoadingIcon>
      ) : (
        <>
          <CardHeader>
            <CardUsername>
              <Icon />
              {post.User.username}
            </CardUsername>
            <DatePosted>{dateParser(post.createdAt)}</DatePosted>
          </CardHeader>
          {!isUpdated && <CardText>{post.content}</CardText>}
          {isUpdated && (
            <BtnUpdatePost post={post} setIsUpdated={setIsUpdated} />
          )}
          {post.picture && <CardPicture src={post.picture} alt="post" />}

          <CardFooter>
            <IconWrap>
              <IconComment onClick={() => setShowComments(!showComments)} />{" "}
              <p>{post.Comments.length}</p>
            </IconWrap>
            {userData.id === post.userId && (
              <IconWrap>
                <UpdateIcon onClick={() => setIsUpdated(!isUpdated)} />
                <BtnDeletePost idPost={post.id} />
              </IconWrap>
            )}
          </CardFooter>
          {showComments && <CardComment post={post} />}
        </>
      )}
    </CardContainer>
  );
};

export default CardPost;
