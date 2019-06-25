import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ROUTES from '../../constants/routes';

class Navbar extends Component {
  render(){
    return(
      <div>
        {this.props.auth.uid ? <NavAuth/> : <NavNonAuth/>}
      </div>
    )
  }
}

const NavNonAuth = props => <div></div>

const NavAuth = props => (
  <nav className="nav-extended">
    <div className="nav-wrapper white">
      <div className="container">
        <a href={ROUTES.LANDING} className="brand-logo black-text hide-on-med-and-down">Alterz</a>
        <a href={ROUTES.HOME} className="left brand-logo black-text hide-on-med-and-up" style={{ paddingLeft: 20 }}>
          Alterz
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href={ROUTES.HOME} className="black-text">Tournaments</a>
          </li>
          <li>
            <a href={ROUTES.PLAYERS_MALE} className="black-text">Players</a>
          </li>
          <li>
            <a href={ROUTES.PROFILE} className="black-text">
              <i className="material-icons black-text">person</i>
            </a>
          </li>
          <li>
            <a href={ROUTES.ANNOUNCEMENTS}>
              <i className="material-icons black-text">notifications</i>
            </a>
          </li>
        </ul>
        <ul className="right hide-on-med-and-up">
          <li>
            <a href={ROUTES.PROFILE}>
              <i className="material-icons black-text">person</i>
            </a>
          </li>
          <li>
            <a href={ROUTES.ANNOUNCEMENTS}>
              <i className="material-icons black-text">notifications</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="nav-content grey">
      <ul className="tabs tabs-transparent hide-on-med-and-up">
        <li className="tab"><a href={ROUTES.HOME}>Tournaments</a></li>
        <li className="tab"><a href={ROUTES.PLAYERS_MALE}>Players</a></li>
      </ul>
    </div>
  </nav>
);

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
