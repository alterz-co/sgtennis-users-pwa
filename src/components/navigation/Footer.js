import React, { Component } from 'react';

import * as ROUTES from '../../constants/routes';

class Footer extends Component {
  render(){
    return(
      <div className="row" style={{ marginTop: 100 }}>
        <div className="col s12 l12">
          <p className="center-align">
            <span style={{ paddingRight: 10 }}>
              <a href="" className="grey-text">Contact: ziyi@alterz.co</a>
            </span>
            <span>
              <a href={ROUTES.TERMS} className="grey-text">Terms</a>
            </span>
          </p>
          <p className="center-align">
            Copyright 2019 Alterz. All rights reserved.
          </p>
          <p className="center-align">
            Made with <i className="material-icons" style={{ fontSize: 12 }}>favorite</i> and{' '}
            <i className="material-icons" style={{ fontSize: 12 }}>free_breakfast</i> by Ziyi
          </p>
        </div>
      </div>
    )
  }
}

export default Footer;
