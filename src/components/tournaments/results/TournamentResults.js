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

class TournamentResults extends Component {

  componentDidMount(){
    ReactGA.initialize('UA-142471653-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(){
    const { auth, tournamentId, results } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!results){
      return <LoaderComponent/>
    }

    const resultsDate = _.orderBy(results, function(o) {
      return new moment(o.date).format('YYYYMMDD');
    }, ['desc']);

    return(
      <div style={{ marginTop: 20 }}>
        <p className="center-align" style={{ fontWeight: 'bold' }}>Results</p>
        <div className="row">
        {
          resultsDate && resultsDate.map(result => {
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
