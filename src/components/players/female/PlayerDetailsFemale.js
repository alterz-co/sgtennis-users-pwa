import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../../LoaderComponent';
import TournamentsFemale from './tournaments/TournamentsFemale';

import * as ROUTES from '../../../constants/routes';

class PlayerDetailsFemale extends Component {

  render(){
    const { auth, userId, user } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!user){
      return <LoaderComponent/>
    }

    return(
      <div className="container">
        <div className="row">
          <div className="col s12 l12">
            <p className="center-align" style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
              {user.name}
            </p>
            <p className="grey-text">Gender: {user.gender}</p>
            <p className="grey-text">Age: {user.age}</p>
            <p className="grey-text">Nationality: {user.nationality}</p>
            <p className="grey-text">Email: {user.email}</p>
            <p className="grey-text">Phone: {user.phone}</p>
          </div>
          <div className="col s12 l12">
            <TournamentsFemale userId={userId}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;

  return {
    auth: state.firebase.auth,
    userId: id,
    user: user
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users' }
  ])
)(PlayerDetailsFemale);
