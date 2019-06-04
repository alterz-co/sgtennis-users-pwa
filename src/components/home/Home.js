import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import TournamentList from '../tournaments/TournamentList';
import Footer from '../navigation/Footer';

import * as ROUTES from '../../constants/routes';

class Home extends Component {

  render(){
    if(!this.props.auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    return(
      <div className="container">
        <div className="row">
          <div className="col s12 l12">
            <p style={{ fontSize: 20, fontWeight: 'bold' }}>
              <span role="img" aria-label="tennis-ball" style={{ paddingRight: 20 }}>🎾</span>
              Tournaments
            </p>
            <TournamentList tournaments={this.props.tournaments}/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    tournaments: state.firestore.ordered.tournaments
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'tournaments', orderBy: ['startDate', 'desc' ]}
  ])
)(Home);
