import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import _ from 'lodash';
import LoaderComponent from '../../LoaderComponent';
import MaleSingles from './singles/MaleSingles';
import FemaleSingles from './singles/FemaleSingles';
import MaleDoubles from './doubles/MaleDoubles';
import FemaleDoubles from './doubles/FemaleDoubles';

import * as ROUTES from '../../../constants/routes';

class UserTournaments extends Component {
  render(){
    const { auth, profile, maleSingles, femaleSingles, maleDoubles, femaleDoubles } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!maleSingles){
      return <LoaderComponent/>
    }

    if(!maleDoubles){
      return <LoaderComponent/>
    }

    const maleSinglesYear = _.orderBy(maleSingles, ['year'], ['desc']);
    const femaleSinglesYear = _.orderBy(femaleSingles, ['year'], ['desc']);
    const maleDoublesYear = _.orderBy(maleDoubles, ['year'], ['desc']);
    const femaleDoublesYear = _.orderBy(femaleDoubles, ['year'], ['desc']);

    return(
      <div className="col s12 l12" style={{ marginTop: 40 }}>
        <div className="row">
          <div className="col s8 l8">
            <p style={{ fontSize: 20, fontWeight: 'bold' }}>
              Past Tournaments
            </p>
          </div>
          <div className="col s4 l4">
            <a href={ROUTES.USER_TOURNAMENT_ADD} className="btn-floating btn-small pink">
              <i className="material-icons">add</i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l12">
          </div>
        </div>
        {profile.gender === 'Male' ? <MaleSingles userId={auth.uid} maleSingles={maleSinglesYear}/> : <FemaleSingles userId={auth.uid} femaleSingles={femaleSinglesYear}/>}
        {profile.gender === 'Male' ? <MaleDoubles userId={auth.uid} maleDoubles={maleDoublesYear}/> : <FemaleDoubles userId={auth.uid} femaleDoubles={femaleDoublesYear}/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    maleSingles: state.firestore.ordered.maleSingles,
    femaleSingles: state.firestore.ordered.femaleSingles,
    maleDoubles: state.firestore.ordered.maleDoubles,
    femaleDoubles: state.firestore.ordered.femaleDoubles
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'userTournaments', storeAs: 'maleSingles', where: ['category', '==', "Male Singles"] },
    { collection: 'userTournaments', storeAs: 'femaleSingles', where: ['category', '==', "Female Singles"] },
    { collection: 'userTournaments', storeAs: 'maleDoubles', where: ['category', '==', "Male Doubles"] },
    { collection: 'userTournaments', storeAs: 'femaleDoubles', where: ['category', '==', "Female Doubles"] }
  ])
)(UserTournaments);
