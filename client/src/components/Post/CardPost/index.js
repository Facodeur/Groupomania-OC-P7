import React, { useEffect, useState } from "react";
import { dateParser } from "../../../utils/date-parser";
import { FaSpinner } from "react-icons/fa";
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
} from "./CardPostElements";

const CardPost = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    post && setIsLoading(false)
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
          <CardText>
            {post.content}
          </CardText>
          {post.picture && <CardPicture src={post.picture} alt="post" />} 
          <CardFooter>
            <IconComment />{" "} {post.Comments.length}
          </CardFooter>
        </>
      )}
    </CardContainer>
  );
};

export default CardPost;
