import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  ProfilWrap,
  ProfilCard,
  ProfilTitre,
  ProfilDesc,
  ButtonDelete,
  ProfilRow,
} from "./ProfilElements";

const Profil = () => {
  const userData = useSelector(state => state.userReducer);
  console.log(userData)
  return (
    <>
      <Container>
        <ProfilWrap>
          <ProfilCard>
            <ProfilTitre>{userData.username}</ProfilTitre>
            <ProfilDesc>email: {userData.email}</ProfilDesc>
            <ProfilDesc>inscrit depuis le {userData.createAt}</ProfilDesc>
            <ProfilRow>
              <ButtonDelete>Supprimer le compte</ButtonDelete>
            </ProfilRow>
          </ProfilCard>
        </ProfilWrap>
      </Container>
    </>
  );
};

export default Profil;
