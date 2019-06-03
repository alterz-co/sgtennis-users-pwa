import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as ROUTES from '../../constants/routes';

class Home extends Component {

  render(){
    if(!this.props.auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    return(
      <div className="container">
        Home
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Home);
