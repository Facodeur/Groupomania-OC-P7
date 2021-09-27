import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import SigninForm from "../components/LogForm/SigninForm"
import SignupForm from "../components/LogForm/SignupForm";
import Profil from '../pages/Profil';
import Home from "../pages/Home";
import PrivateRoute from './PrivateRoute';
import PrivateRouteAdmin from './PrivateRouteAdmin';
import BoardAdmin from '../pages/BoardAdmin/UserManagement';

const index = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/profil" component={Profil} />
        <PrivateRouteAdmin exact path="/board-admin" component={BoardAdmin} />
        <Route exact path="/signin" component={SigninForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Redirect to="/" />
      </Switch>
  )
}


export default index
