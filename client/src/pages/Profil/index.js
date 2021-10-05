import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../actions/user.actions";
import { dateParser } from "../../utils/utils";
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
import Modal from "../../components/Modal";
import { Button } from "../../components/Post/BtnDeletePost/BtnDeletePostElements";

const Profil = () => {
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [alertMessage, setAlertMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const removeCookie = (key) => {
    if (window !== undefined) {
      cookie.remove(key, { expires: 1 });
    }
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
    removeCookie("jwt");
    setAlertMessage(true);
  };

  if (alertMessage) {
    setTimeout(() => {
      setAlertMessage(false);
      window.location = "/";
    }, 2000);
    return <AlertMessage>{userData.message}</AlertMessage>;
  }

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <p>Confirmez-vous la suppression ?</p>
        <Button onClick={() => handleDeleteUser(userData.id)}>Confirmer</Button>
      </Modal>
      <Container>
        <ProfilWrap>
          <ProfilCard>
            <ProfilName>{userData.username}</ProfilName>
            <ProfilDesc>Email: {userData.email}</ProfilDesc>
            <ProfilDesc>Membre depuis le : </ProfilDesc>
            <ProfilDesc>{dateParser(userData.createdAt)}</ProfilDesc>
            {userData.isAdmin === 0 && (
              <ProfilRow>
                <ButtonDelete onClick={() => setShowModal(!showModal)}>
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
