import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Terms from './components/landing/Terms';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ResetPassword from './components/auth/ResetPassword';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

import * as ROUTES from './constants/routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div style={{ marginTop: 40, paddingBottom: 200 }}>
            <Switch>
              <Route exact path={ROUTES.LANDING} component={Landing} />
              <Route exact path={ROUTES.TERMS} component={Terms} />
              <Route exact path={ROUTES.REGISTER} component={Register} />
              <Route exact path={ROUTES.LOGIN} component={Login} />
              <Route exact path={ROUTES.PASSWORD_RESET} component={ResetPassword} />
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route exact path={ROUTES.PROFILE} component={Profile} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
