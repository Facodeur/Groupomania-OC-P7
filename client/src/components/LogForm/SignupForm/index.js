import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
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
  TextError,
  FormRow,
  FormCheck,
  FormSpan,
  FormLink,
  AlertMessage,
} from "../FormElements";

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
  const [alertMessage, setAlertMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setTermsError("");

    if (password !== confirmPassword || !termsCheck) {
      if (password !== confirmPassword) {
        setConfirmPasswordError("Les mots de passes ne correspondent pas");
      }
      if (!termsCheck) {
        setTermsError("Veuillez valider les conditions générales");
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
          if (res.data.errorEmail) setEmailError(res.data.errorEmail);

          if (res.data.errors) {
            setUsernameError(res.data.errors.username);
            setEmailError(res.data.errors.email);
            setPasswordError(res.data.errors.password);
          } else if (res.status === 201) {
            setAlertMessage(true);
            setTimeout(() => {
              setAlertMessage(false);
              history.push("/signin");
            }, 3000);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {alertMessage && (
        <AlertMessage>Inscription réussi, connectez vous !</AlertMessage>
      )}
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormLogo src="./img/icons/signup.svg" alt="log" />
              <FormGroup>
                <FormLabel htmlFor="username">Nom utilisateur</FormLabel>
                <FormInput
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                {usernameError && <TextError>{usernameError}</TextError>}
              </FormGroup>
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
                {passwordError && <TextError>{passwordError}</TextError>}
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="confirmPassword">
                  Confirmation du mot de passe
                </FormLabel>
                <FormInput
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPasswordError && (
                  <TextError>{confirmPasswordError}</TextError>
                )}
              </FormGroup>
              <FormGroup>
                <FormRow>
                  <FormCheck
                    type="checkbox"
                    checked={termsCheck}
                    onChange={(e) => setTermsCheck(!termsCheck)}
                  />
                  <FormSpan>
                    J'accepte les{" "}
                    <FormLink
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      conditions générales
                    </FormLink>
                  </FormSpan>
                </FormRow>
                {termsError && <TextError center>{termsError}</TextError>}
              </FormGroup>
              <FormButton type="submit">Validez</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignupForm;
