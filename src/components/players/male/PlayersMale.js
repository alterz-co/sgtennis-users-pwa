import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../../LoaderComponent';
import PlayersHeader from '../PlayersHeader';

import * as ROUTES from '../../../constants/routes';

class PlayersMale extends Component {

  render(){
    const { auth, male } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!male){
      return <LoaderComponent/>
    }

    return(
      <div className="container">
        <PlayersHeader/>
        <p className="center-align" style={{ fontWeight: 'bold', marginBottom: 20 }}>Male</p>
        <ul className="collection with-header">
        {
          male && male.map(male => {
            return (
              <li className="collection-item" key={male.id}>
                <div>
                  {male.name}
                  <a href={`/player/male/${male.id}`} className="secondary-content">
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
    male: state.firestore.ordered.male
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users', storeAs: 'male', where: ['gender', '==', "Male"] }
  ])
)(PlayersMale);
