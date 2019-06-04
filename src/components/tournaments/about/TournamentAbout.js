import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoaderComponent from '../../LoaderComponent';
import { connect } from 'react-redux';

import * as ROUTES from '../../../constants/routes';

class TournamentAbout extends Component {

  render(){
    const { auth, tournament } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!tournament){
      return <LoaderComponent/>
    }

    return(
      <div style={{ marginTop: 20 }}>
        <p className="center-align" style={{ fontWeight: 'bold' }}>About</p>
        <div
          style={{ marginTop: 20, marginBottom: 50 }}
          dangerouslySetInnerHTML={{ __html: tournament.description }}
        >
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(TournamentAbout);
