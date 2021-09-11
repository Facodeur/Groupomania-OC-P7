import React from "react";

const SignupForm = () => {
  return (
    <div className="container">
      <div className="row center-align">
      <div className="col l12 s12">
          <img
            src="./img/icons/login.svg"
            alt="log"
            style={{ height: 300, width: 300 }}
          />
        </div>
        <form className="col l12 s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Nom utilisateur</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Mot de passe</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="confirm-password"
                type="password"
                className="validate"
              />
              <label htmlFor="confirm-password">Confirmation du mot de passe</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
