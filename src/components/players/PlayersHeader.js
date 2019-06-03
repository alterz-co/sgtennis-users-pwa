import React, { Component } from 'react';

import * as ROUTES from '../../constants/routes';

class PlayersHeader extends Component {
  render(){
    return(
      <div>
        <p className="center-align" style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 40 }}>
          Players
        </p>
        <span>
          <a href={ROUTES.PLAYERS_MALE} className="black-text" style={{ paddingLeft: 20 }}>Male</a>
          <a href={ROUTES.PLAYERS_FEMALE} className="black-text" style={{ paddingLeft: 40 }}>Female</a>
        </span>
      </div>
    )
  }
}

export default PlayersHeader;
