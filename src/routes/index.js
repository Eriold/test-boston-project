import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Login from '../pages/Login';
import PassRecovery from '../pages/PassRecovery';
import Register from '../pages/Register';
import Err from '../pages/Error'

const Routes = () => {

  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/PassRecovery' component={PassRecovery} />
      <Route exact path='/Register' component={Register} />
      <Route component={Err} />
    </Switch>
  )
}

export default Routes