import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../../LoaderComponent';
import ReactGA from 'react-ga';
import _ from 'lodash';
import moment from 'moment';

import * as ROUTES from '../../../constants/routes';

class TournamentUpdates extends Component {

  componentDidMount(){
    ReactGA.initialize('UA-142471653-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(){
    const { auth, tournamentId, updates } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!updates){
      return <LoaderComponent/>
    }

    const updatesCreatedAt = _.orderBy(updates, function(o) {
      return new moment(o.createdAt).format('YYYYMMDD');
    }, ['desc']);

    return(
      <div style={{ marginTop: 20 }}>
        <p className="center-align" style={{ fontWeight: 'bold' }}>Updates</p>
        <div className="row">
        {
          updatesCreatedAt && updatesCreatedAt.map(update => {
            return update.tournamentId === tournamentId && (
              <div className="col s12 l12" key={update.id}>
                <div className="card">
                  <div className="card-content">
                    <p style={{ fontWeight: 'bold' }}>{update.name}</p>
                    <p className="grey-text">{update.createdAt}</p>
                    <div
                      style={{ marginTop: 20, marginBottom: 50 }}
                      dangerouslySetInnerHTML={{ __html: update.body }}
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
    updates: state.firestore.ordered.updates
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'updates', orderBy: ['createdAt', 'desc'] }
  ])
)(TournamentUpdates);
