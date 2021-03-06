import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import SinglesFemale from './SinglesFemale';
import DoublesFemale from './DoublesFemale';

class TournamentsFemale extends Component {
  render(){

    const { userId, userTournaments } = this.props;

    return(
      <div style={{ marginTop: 40 }}>
        <p style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 40 }}>
          Past Tournaments
        </p>
        <SinglesFemale userId={userId} userTournaments={userTournaments}/>
        <DoublesFemale userId={userId} userTournaments={userTournaments}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userTournaments: state.firestore.ordered.userTournaments
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'userTournaments' }
  ])
)(TournamentsFemale);
