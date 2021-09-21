import React from "react";
import { HomeContainer, HomePostList } from "./HomeElements";
import CardPostList from "../../components/CardPostList";

const Home = () => {

  return (
    <HomeContainer>
      {}
      <HomePostList>
        <CardPostList />
      </HomePostList>
    </HomeContainer>
  );
};

export default Home;
