import React from "react";

const SigninForm = () => {
  return (
    <div className="container">
      <div className="row center-align">
        <div className="col l12 s12">
          <img
            src="./img/icons/auth.svg"
            alt="log"
            style={{ height: 300, width: 300 }}
          />
        </div>
        <form className="col l12 s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
