import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../actions/user.actions";
import { getUsers } from "../../../actions/users.action";
import Modal from "../../../components/Modal";
import { Button } from "../../../components/Post/BtnDeletePost/BtnDeletePostElements";
import { UserContext } from "../../../context/UserContext";
import { dateParser } from "../../../utils/utils";
import {
  AlertMessage,
  BtnDelete,
  Table,
  TableContainer,
  Td,
  Th,
  Tr,
} from "./UserManagementElements";

const BoardAdmin = () => {
  const { setLoadingUser } = useContext(UserContext);
  const usersData = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  const [alertMessage, setAlertMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
    setAlertMessage(true);
    setLoadingUser(true);
    setShowModal(false);
  };

  if (alertMessage) {
    setTimeout(() => {
      dispatch(getUsers());
      setAlertMessage(false);
    }, 2000);
    return <AlertMessage>Compte supprimé avec succes</AlertMessage>;
  }

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Id</Th>
            <Th>Nom utilisateur</Th>
            <Th>Email</Th>
            <Th>Rôle</Th>
            <Th>Inscrition</Th>
            <Th>Supprimer</Th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <Tr key={user.id} bgColor={index % 2 === 0 ? "#fff" : "#ddd"}>
              <Td>{user.id}</Td>
              <Td>{user.username}</Td>
              <Td>{user.email}</Td>
              <Td>{user.isAdmin === 0 ? "Utilisateur" : "Administrateur"}</Td>
              <Td>{dateParser(user.createdAt)}</Td>
              <Td>
                {user.isAdmin === 0 && (
                  <>
                    <BtnDelete onClick={() => setShowModal(!showModal)}>
                      Supprimer
                    </BtnDelete>
                    <Modal showModal={showModal} setShowModal={setShowModal}>
                      <p>Confirmez-vous la suppression ?</p>
                      <Button onClick={() => handleDeleteUser(user.id)}>
                        Confirmer
                      </Button>
                    </Modal>
                  </>
                )}
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default BoardAdmin;
