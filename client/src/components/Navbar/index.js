import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UserContext } from "../../context/UserContext";
import Logout from "../Logout";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  Logo,
  ProfilIcon,
} from "./NavbarElements";

const Navbar = () => {
  const { authUser } = useContext(UserContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <Logo src="./img/logo/logo-groupomania.svg" alt="logo" />
        </NavLink>
        <Bars />
        {authUser ? (
          <NavMenu>
            <NavLink to="/profil">
              <ProfilIcon />
              <h4>{userData.username}</h4>
            </NavLink>
            <Logout />
          </NavMenu>
        ) : (
          <NavMenu>
            <NavLink to="/signup">S'enregistrer</NavLink>
            <NavBtnLink to="/signin">Se connecter</NavBtnLink>
          </NavMenu>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
