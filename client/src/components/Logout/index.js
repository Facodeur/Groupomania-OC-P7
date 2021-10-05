import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/user.actions";
import { AiOutlineLogout } from "react-icons/ai";
import { ButtonLogout } from "./LogoutElements";

const Logout = () => {
  const { setAuthUser } = useContext(UserContext);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    setAuthUser(null);
  };

  return (
    <>
      <ButtonLogout onClick={handleLogout}>
        <AiOutlineLogout />
      </ButtonLogout>
    </>
  );
};

export default Logout;
