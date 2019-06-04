import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../../LoaderComponent';

import * as ROUTES from '../../../constants/routes';

class TournamentUpdates extends Component {

  render(){
    const { auth, tournamentId, updates } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!updates){
      return <LoaderComponent/>
    }

    return(
      <div style={{ marginTop: 20 }}>
        <p className="center-align" style={{ fontWeight: 'bold' }}>Updates</p>
        <div className="row">
        {
          updates && updates.map(update => {
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
