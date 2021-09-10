import React from "react";

const SignupForm = () => {
  return (
    <div className="container">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label for="email">Nom utilisateur</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label for="password">Mot de passe</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="confirm-password"
                type="password"
                className="validate"
              />
              <label for="confirm-password">Confirmation du mot de passe</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
