import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UidContext } from "../context/UidContext";
import Logout from "./Logout";

const Navbar = () => {
  const uid = useContext(UidContext);

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
          {uid ? (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <h5>Bienvenue {uid.currentUser}</h5>
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
      <ul className="sidenav" id="slide-out">
        <li>
          <Link to="/signin">Se connecter</Link>
        </li>
        <li>
          <Link to="/signup" className="btn waves-effect waves-light">
            S'inscrire
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
