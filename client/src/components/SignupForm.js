import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsCheck, setTermsCheck] = useState(false);
  const [termsError, setTermsError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setTermsError("");

    if(password !== confirmPassword || !termsCheck) {
      if(password !== confirmPassword) {
        setConfirmPasswordError("Les mots de passes ne correspondent pas")
      }
      if(!termsCheck) {
        setTermsError("Veuillez valider les conditions générales")
      }
      
    } else {
      axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/user/register`,
      withCredentials: true,
      data: {
        username,
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.errorEmail)
          setEmailError(res.data.errorEmail);

        if (res.data.errors)
          setUsernameError(res.data.errors.username)
          setEmailError(res.data.errors.email);
          setPasswordError(res.data.errors.password);
        
        if(res.status === 201)
          history.push("/signin");
      })
      .catch((err) => console.log(err));
    }
  };
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
        <form onSubmit={handleSubmit} className="col l12 s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                className="validate"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">Nom utilisateur</label>
              {usernameError && (
                <p className="red-text left-align">{usernameError}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                className="validate"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              {emailError && (
                <p className="red-text left-align">{emailError}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                className="validate"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Mot de passe</label>
              {passwordError && (
                <p className="red-text left-align">{passwordError}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                className="validate"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="confirmPassword">
                Confirmation du mot de passe
              </label>
              {confirmPasswordError && (
                <p className="red-text left-align">{confirmPasswordError}</p>
              )}
            </div>
            <div className="row">
              <p>
              <label>
                <input 
                  className="filled-in" 
                  type="checkbox" 
                  checked={termsCheck}
                  onChange={(e) => setTermsCheck(!termsCheck)}
                />
                <span>
                  J'accepte les{" "}
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    conditions générales
                  </a>
              {termsError && (
                <p className="red-text left-align">{termsError}</p>
              )}
                </span>
              </label>
            </p>
            </div>
          </div>
          <input type="submit" value="Valider l'inscription" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
