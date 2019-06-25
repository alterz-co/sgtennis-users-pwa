import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import LoaderComponent from '../../LoaderComponent';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import * as ROUTES from '../../../constants/routes';

class TournamentAbout extends Component {

  componentDidMount(){
    ReactGA.initialize('UA-142471653-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

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
        <Segment>
          <div
            style={{ marginTop: 20, marginBottom: 50 }}
            dangerouslySetInnerHTML={{ __html: tournament.description }}
          >
          </div>
        </Segment>
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
