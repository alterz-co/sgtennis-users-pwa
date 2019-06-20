import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../../LoaderComponent';
import ReactGA from 'react-ga';

import * as ROUTES from '../../../constants/routes';

class TournamentSchedule extends Component {

  componentDidMount(){
    ReactGA.initialize('UA-142471653-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(){
    const { auth, tournamentId, schedule } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!schedule){
      return <LoaderComponent/>
    }

    return(
      <div style={{ marginTop: 20 }}>
        <p className="center-align" style={{ fontWeight: 'bold' }}>Schedule</p>
        <div className="row">
        {
          schedule && schedule.map(schedule => {
            return schedule.tournamentId === tournamentId && (
              <div className="col s12 l12" key={schedule.id}>
                <div className="card">
                  <div className="card-content">
                    <div
                      style={{ marginTop: 20, marginBottom: 50 }}
                      dangerouslySetInnerHTML={{ __html: schedule.description }}
                    >
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    schedule: state.firestore.ordered.schedule
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([ { collection: 'schedule' } ])
)(TournamentSchedule);
