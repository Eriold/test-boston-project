import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { Login, PassRecovery, Register, Err, Home } from '../pages'

const Routes = () => {

  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/PassRecovery' component={PassRecovery} />
      <Route exact path='/Register' component={Register} />
      <Route exact path='/Home' component={Home} />
      <Route component={Err} />
    </Switch>
  )
}

export default Routes