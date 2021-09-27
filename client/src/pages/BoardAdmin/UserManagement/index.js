import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../actions/user.actions";
import { getUsers } from "../../../actions/users.action";
import { UserContext } from "../../../context/UserContext";
import { dateParser } from "../../../utils/date-parser";
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
  const [alertMessage, setAlertMessage] = useState(false)


  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id))
    setAlertMessage(true);
    setLoadingUser(true);
  }

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
                  <BtnDelete onClick={() => {
                    if (window.confirm("Confirmer la suppression du compte")) {
                      handleDeleteUser(user.id)}
                    }
                  }>
                    Supprimer
                  </BtnDelete>
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
