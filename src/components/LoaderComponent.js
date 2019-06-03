import React, { Component } from 'react';

class LoaderComponent extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 l12">
            <h3 className="center-align">
              <span role="img" aria-label="tennis-ball" style={{ paddingRight: 20 }}>🎾</span>
              Loading....
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default LoaderComponent;
