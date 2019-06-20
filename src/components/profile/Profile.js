import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import UserTournaments from './tournaments/UserTournaments';
import ReactGA from 'react-ga';

import * as ROUTES from '../../constants/routes';

class Profile extends Component {

  componentDidMount(){
    ReactGA.initialize('UA-142471653-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(){
    const { auth, profile } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    return(
      <div className="container">
        <div className="row">
          <div className="col s12 l12">
            <div className="row">
              <div className="col s8 l8">
                <p style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>{profile.name}</p>
              </div>
              <div className="col s4 l4">
                <a href={`/profile/${auth.uid}`} className="btn-floating btn-large pink">
                  <i className="material-icons">edit</i>
                </a>
              </div>
            </div>
            <p className="grey-text">Gender: {profile.gender}</p>
            <p className="grey-text">Age: {profile.age}</p>
            <p className="grey-text">Nationality: {profile.nationality}</p>
            <p className="grey-text">Email: {profile.email}</p>
            <p className="grey-text">Phone: {profile.phone}</p>
            <a className="btn-small col s12 m12 l12 black white-text" onClick={() => this.props.logout()}>
              Logout
            </a>
          </div>
          <UserTournaments/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
