import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import SigninForm from '../components/SigninForm';
import SignupForm from '../components/SignupForm';
import Home from '../pages/Home';
import Profil from '../pages/Profil';

const index = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profil" component={Profil} />
        <Route exact path="/signin" component={SigninForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Redirect to="/" />
      </Switch>
  )
}

export default index
