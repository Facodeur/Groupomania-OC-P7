import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/post.action';
import { HomeContainer, HomePostList } from './HomeElements';
import CardPost from '../../components/CardPost';

const Home = () => {
  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postReducer);


  useEffect(() => {
    if(loadPost) {
      dispatch(getPosts());
      setLoadPost(false);
    }
  }, [loadPost, dispatch])

  return (
    <HomeContainer>
     <HomePostList>
       {posts.data && posts.data.map(post => {
         return <CardPost post={post} key={post.id} />
       })}
     </HomePostList>
    </HomeContainer>
  )
}

export default Home;
