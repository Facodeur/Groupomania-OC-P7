import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Logout from "./Logout";

const Navbar = () => {
  const { authUser } = useContext(UserContext);
  console.log("Navbar", authUser)
  
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Groupomania
          </Link>
          <Link to="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          {authUser ? (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <h5>Bienvenue {authUser.username}</h5>
              </li>
              <li>
                <Link to="/profil">profil</Link>
              </li>
              <Logout />
            </ul>
          ) : (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/signin">Se connecter</Link>
              </li>
              <li>
                <Link to="/signup" className="btn waves-effect waves-light">
                  S'inscrire
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
