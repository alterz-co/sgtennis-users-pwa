import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../../LoaderComponent';
import PlayersHeader from '../PlayersHeader';
import ReactGA from 'react-ga';

import * as ROUTES from '../../../constants/routes';

class PlayersFemale extends Component {

  componentDidMount(){
    ReactGA.initialize('UA-142471653-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(){
    const { auth, female } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!female){
      return <LoaderComponent/>
    }

    return(
      <div className="container">
        <PlayersHeader/>
        <p className="center-align" style={{ fontWeight: 'bold', marginBottom: 20 }}>Female</p>
        <ul className="collection with-header">
        {
          female && female.map(female => {
            return (
              <li className="collection-item" key={female.id}>
                <div>
                  {female.name}
                  <a href={`/player/female/${female.id}`} className="secondary-content">
                    <i className="material-icons black-text">chevron_right</i>
                  </a>
                </div>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    female: state.firestore.ordered.female
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users', storeAs: 'female', where: ['gender', '==', "Female"] }
  ])
)(PlayersFemale);
