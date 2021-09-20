import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import SigninForm from "../components/LogForm/SigninForm"
import SignupForm from "../components/LogForm/SignupForm";
import Profil from '../pages/Profil';
import Home from "../pages/Home";
import PrivateRoute from './PrivateRoute';

const index = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/profil" component={Profil} />
        <Route exact path="/signin" component={SigninForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Redirect to="/" />
      </Switch>
  )
}


export default index
