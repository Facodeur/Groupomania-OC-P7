import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../actions/user.actions";
import { dateParser } from "../../utils/date-parser";
import cookie from "js-cookie";
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

  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const removeCookie = (key) => {
    if (window !== undefined) {
      cookie.remove(key, { expires: 1 });
    }
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id))
    removeCookie("jwt");
    history.push("/signin");
  };

  return (
    <>
      <Container>
        <ProfilWrap>
          <ProfilCard>
            <ProfilTitre>{userData.username}</ProfilTitre>
            <ProfilDesc>Email: {userData.email}</ProfilDesc>
            <ProfilDesc>Membre depuis le : </ProfilDesc>
            <ProfilDesc>{dateParser(userData.createAt)}</ProfilDesc>
            <ProfilRow>
              <ButtonDelete onClick={() => handleDeleteUser(userData.id)}>
                Supprimer le compte
              </ButtonDelete>
            </ProfilRow>
          </ProfilCard>
        </ProfilWrap>
      </Container>
    </>
  );
};

export default Profil;
