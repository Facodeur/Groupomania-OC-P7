import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/post.action';
import { HomeContainer, HomePostList } from './HomeElements';
import CardPost from '../../components/CardPost';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postReducer);


  useEffect(() => {
    dispatch(getPosts());

  }, [dispatch])

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
