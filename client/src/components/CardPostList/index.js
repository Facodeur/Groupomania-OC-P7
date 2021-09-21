import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post.action";
import CardPost from "../CardPost";

const CardPostList = () => {
  const [loadPost, setLoadPost] = useState(true);
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPost(true);
    }
  };

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts(count));
      setLoadPost(false);
      setCount(count + 5);
    }

    window.addEventListener("scroll", loadMore);

    return () => window.removeEventListener("scroll", loadMore);
  }, [loadPost, count, dispatch]);
  return (
    <>
      {posts.length &&
        posts.map((post) => {
          return <CardPost post={post} key={post.id} />;
        })}
    </>
  );
};

export default CardPostList;
