import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Logout from "../Logout";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const { authUser } = useContext(UserContext);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        {authUser ? (
          <SidebarMenu>
            {authUser.isAdmin === 1 && (
              <SidebarLink to="/board-admin">Gestion utilisateur</SidebarLink>
            )}
            <SidebarLink to="/profil" onClick={toggle}>
              Profile
            </SidebarLink>
            <Logout onClick={toggle} />
          </SidebarMenu>
        ) : (
          <>
            <SidebarMenu>
              <SidebarLink to="/signin" onClick={toggle}>
                Se connecter
              </SidebarLink>
              <SideBtnWrap>
                <SidebarRoute to="/signup" onClick={toggle}>
                  S'enregistrer
                </SidebarRoute>
              </SideBtnWrap>
            </SidebarMenu>
          </>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
