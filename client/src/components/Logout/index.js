import React, { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { AiOutlineLogout } from "react-icons/ai";
import { UserContext } from "../../context/UserContext";
import { removeCookie } from "../../utils/utils";
import { ButtonLogout } from "./LogoutElements";

const Logout = ({ className }) => {
  const { setAuthUser } = useContext(UserContext);

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    setAuthUser(null);
  };

  return (
    <>
      <ButtonLogout onClick={logout}>
        <AiOutlineLogout />
      </ButtonLogout>
    </>
  );
};

export default Logout;
