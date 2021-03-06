import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default Routes;