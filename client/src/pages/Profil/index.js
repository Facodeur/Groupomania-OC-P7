import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../actions/user.actions";
import { dateParser } from "../../utils/date-parser";
import cookie from "js-cookie";
import {
  Container,
  ProfilWrap,
  ProfilCard,
  ProfilName,
  ProfilDesc,
  ButtonDelete,
  ProfilRow,
  AlertMessage,
} from "./ProfilElements";

const Profil = () => {
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [alertMessage, setAlertMessage] = useState(false)


  const removeCookie = (key) => {
    if (window !== undefined) {
      cookie.remove(key, { expires: 1 });
    }
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
    removeCookie("jwt");
    setAlertMessage(true)
  };

  if (alertMessage) {
    setTimeout(() => {
      setAlertMessage(false)
      window.location = "/";
    }, 2000);
    return <AlertMessage>{userData.message}</AlertMessage>;
  }

  return (
    <>
      <Container>
        <ProfilWrap>
          <ProfilCard>
            <ProfilName>{userData.username}</ProfilName>
            <ProfilDesc>Email: {userData.email}</ProfilDesc>
            <ProfilDesc>Membre depuis le : </ProfilDesc>
            <ProfilDesc>{dateParser(userData.createdAt)}</ProfilDesc>
            {userData.isAdmin === 0 && (
              <ProfilRow>
                <ButtonDelete onClick={() => {
                  if (window.confirm("Confirmation de suppression du compte")) {
                    handleDeleteUser(userData.id)}
                  }
                }>
                  Supprimer le compte
                </ButtonDelete>
              </ProfilRow>
            )}
          </ProfilCard>
        </ProfilWrap>
      </Container>
    </>
  );
};

export default Profil;
