import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import Footer from '../navigation/Footer';
import ReactGA from 'react-ga';

import * as ROUTES from '../../constants/routes';

class Landing extends Component {

  componentDidMount(){
    ReactGA.initialize('UA-142471653-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(){
    if(this.props.auth.uid){
      return <Redirect to={ROUTES.HOME}/>
    }

    return(
      <div className="container">
        <div className="row">
          <img alt="logo" className="col s12 m12 l12" src={logo} style={{ height: 200 }}/>
          <a href={ROUTES.REGISTER} className="btn-large col s12 m12 l12 black white-text" style={{ marginBottom: 20 }}>
            Register
          </a>
          <a href={ROUTES.LOGIN} className="btn-large col s12 m12 l12 white black-text">
            Login
          </a>
        </div>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Landing);
