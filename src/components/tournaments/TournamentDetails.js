import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import TournamentHeader from './TournamentHeader';
import TournamentUpdates from './updates/TournamentUpdates';
import TournamentResults from './results/TournamentResults';
import TournamentSchedule from './schedule/TournamentSchedule';
import TournamentAbout from './about/TournamentAbout';

import * as ROUTES from '../../constants/routes';

class TournamentDetails extends Component {
  render(){
    const tournamentId = this.props.match.params.id;
    const { auth, tournament } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    return(
      <div className="container">
        <TournamentHeader tournament={tournament} tournamentId={tournamentId}/>
        <div className="row">
          <div className="col s12 l12">
            <Route
              exact
              path={`/tournament/${tournamentId}`}
              render={() => <TournamentUpdates tournament={tournament} tournamentId={tournamentId}/>}
            />
            <Route
              path={`/tournament/${tournamentId}/updates`}
              render={() => <TournamentUpdates tournament={tournament} tournamentId={tournamentId}/>}
            />
            <Route
              path={`/tournament/${tournamentId}/results`}
              render={() => <TournamentResults tournament={tournament} tournamentId={tournamentId}/>}
            />
            <Route
              path={`/tournament/${tournamentId}/schedule`}
              render={() => <TournamentSchedule tournament={tournament} tournamentId={tournamentId}/>}
            />
            <Route
              path={`/tournament/${tournamentId}/about`}
              render={() => <TournamentAbout tournament={tournament} tournamentId={tournamentId}/>}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const tournaments = state.firestore.data.tournaments;
  const tournament = tournaments ? tournaments[id] : null;

  return {
    auth: state.firebase.auth,
    tournament: tournament
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'tournaments' }
  ])
)(TournamentDetails);
