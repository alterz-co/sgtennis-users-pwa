import React, { Component } from 'react';

import * as ROUTES from '../../constants/routes';

class HomeNav extends Component {
  render(){
    return(
      <div className="col s12 l12" style={{ marginTop: 40 }}>
        <p className="center-align">
          <a href={ROUTES.LANDING}>
            <i className="material-icons black-text">home</i>
          </a>
        </p>
      </div>
    )
  }
}

export default HomeNav;
