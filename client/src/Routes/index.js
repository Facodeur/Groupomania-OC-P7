import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from '../pages/Home';
import Profil from '../pages/Profil';

const index = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profil" component={Profil} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default index
