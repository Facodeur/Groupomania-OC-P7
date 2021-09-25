import React, { useContext } from "react";
import { HomeContainer, HomePostList } from "./HomeElements";
import CardPostList from "../../components/Post/CardPostList";
import { UserContext } from "../../context/UserContext";
import CardPostForm from "../../components/Post/CardPostForm";

const Home = () => {
  const  { authUser }  = useContext(UserContext);

  return (
    <HomeContainer>
      {authUser && <CardPostForm /> }
      <HomePostList>
        <CardPostList />
      </HomePostList>
    </HomeContainer>
  );
};

export default Home;
