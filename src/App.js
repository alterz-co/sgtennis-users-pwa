import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Landing from './components/landing/Landing';
import Terms from './components/landing/Terms';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ResetPassword from './components/auth/ResetPassword';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import ProfileEdit from './components/profile/ProfileEdit';
import UserTournamentsAdd from './components/profile/tournaments/UserTournamentsAdd';
import UserTournamentsEdit from './components/profile/tournaments/UserTournamentsEdit';
import PlayersMale from './components/players/male/PlayersMale';
import PlayersFemale from './components/players/female/PlayersFemale';
import PlayerDetailsMale from './components/players/male/PlayerDetailsMale';
import PlayerDetailsFemale from './components/players/female/PlayerDetailsFemale';

import * as ROUTES from './constants/routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <div style={{ marginTop: 40, paddingBottom: 200 }}>
            <Switch>
              <Route exact path={ROUTES.LANDING} component={Landing} />
              <Route exact path={ROUTES.TERMS} component={Terms} />
              <Route exact path={ROUTES.REGISTER} component={Register} />
              <Route exact path={ROUTES.LOGIN} component={Login} />
              <Route exact path={ROUTES.PASSWORD_RESET} component={ResetPassword} />
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route exact path={ROUTES.PROFILE} component={Profile} />
              <Route path={ROUTES.PROFILE_EDIT} component={ProfileEdit}/>
              <Route path={ROUTES.USER_TOURNAMENT_ADD} component={UserTournamentsAdd}/>
              <Route path={ROUTES.USER_TOURNAMENT_EDIT} component={UserTournamentsEdit}/>
              <Route path={ROUTES.PLAYERS_MALE} component={PlayersMale}/>
              <Route path={ROUTES.PLAYERS_FEMALE} component={PlayersFemale}/>
              <Route path={ROUTES.PLAYER_DETAILS_MALE} component={PlayerDetailsMale}/>
              <Route path={ROUTES.PLAYER_DETAILS_FEMALE} component={PlayerDetailsFemale}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
