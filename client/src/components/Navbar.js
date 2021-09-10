import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Groupomania
          </Link>
          <Link to="#" data-target="slide-out" className="sidenav-trigger">
            <i class="material-icons">menu</i>
          </Link>
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
        </div>
      </nav>
      <ul class="sidenav" id="slide-out">
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
