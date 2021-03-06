import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import SinglesMale from './SinglesMale';
import DoublesMale from './DoublesMale';

class TournamentsMale extends Component {
  render(){

    const { userId, userTournaments } = this.props;

    return(
      <div style={{ marginTop: 40 }}>
        <p style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 40 }}>Past Tournaments</p>
        <SinglesMale userId={userId} userTournaments={userTournaments}/>
        <DoublesMale userId={userId} userTournaments={userTournaments}/>
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
)(TournamentsMale);
