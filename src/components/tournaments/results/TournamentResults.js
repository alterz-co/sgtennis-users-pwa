import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../../LoaderComponent';

import * as ROUTES from '../../../constants/routes';

class TournamentResults extends Component {

  render(){
    const { auth, tournamentId, results } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!results){
      return <LoaderComponent/>
    }

    return(
      <div style={{ marginTop: 20 }}>
        <p className="center-align" style={{ fontWeight: 'bold' }}>Results</p>
        <div className="row">
        {
          results && results.map(result => {
            return result.tournamentId === tournamentId && (
              <div className="col s12 l12" key={result.id}>
                <div className="card">
                  <div className="card-content">
                    <p className="center-align" style={{ fontWeight: 'bold' }}>{result.date}</p>
                    <div
                      style={{ marginTop: 20, marginBottom: 50 }}
                      dangerouslySetInnerHTML={{ __html: result.description }}
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
    results: state.firestore.ordered.results
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'results', orderBy: ['createdAt', 'desc'] }
  ])
)(TournamentResults);
