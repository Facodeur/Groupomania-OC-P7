import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SigninForm = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/api/user/login`,
        withCredentials: true,
        data: {
          email,
          password
        }
        
      })
      .then((res) => {
        if (res.data.emailError || res.data.passwordError) {
          setEmailError(res.data.emailError);
          setPasswordError(res.data.passwordError);
        } else {
          console.log(res.data);
          history.push("/");
          setEmailError("");
          setPasswordError("");
        }
      })
      .catch((err) => console.log(err));
  };

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
        <form className="col l12 s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="email">Email</label>
              <input
                className="validate"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && (
                <p className="red-text left-align">{emailError}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="password">Password</label>
              <input
                className="validate"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="red-text left-align">{passwordError}</p>
              )}
            </div>
          </div>
          <input type="submit" value="Se connecter" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
