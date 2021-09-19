import React, { useContext, useState } from "react";
import {
  Container,
  FormWrap,
  FormLogo,
  FormContent,
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  TextError
} from "../FormElements";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const SigninForm = () => {
  let history = useHistory();
  const { setLoadingUser } = useContext(UserContext);

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
        password,
      },
    })
      .then((res) => {
        if (res.data.emailError || res.data.passwordError) {
          setEmailError(res.data.emailError);
          setPasswordError(res.data.passwordError);
        } else {
          console.log(res.data);
          setLoadingUser(true);
          history.push("/");
          setEmailError("");
          setPasswordError("");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormLogo src="./img/icons/auth.svg" alt="log" />
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && <TextError>{emailError}</TextError>}
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && (
                <TextError>{passwordError}</TextError>
              )}
              </FormGroup>
              <FormButton type="submit">Validez</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SigninForm;
