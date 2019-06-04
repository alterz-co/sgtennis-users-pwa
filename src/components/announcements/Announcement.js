import React, { Component } from 'react';
import _ from 'lodash';
import LoaderComponent from '../LoaderComponent';

import * as ROUTES from '../../constants/routes';

class Announcement extends Component {
  render(){
    const { announcements } = this.props;

    if(!announcements){
      return <LoaderComponent/>
    }

    const reverse = _.reverse(announcements)
    const latest = _.last(reverse);

    return(
      <div className="col s12 l12" >
        <p style={{ fontSize: 20, fontWeight: 'bold' }}>
          <span role="img" aria-label="loud-hailer" style={{ paddingLeft: 10, paddingRight: 20 }}>📢</span>
          Latest Announcement
        </p>
        <div className="container">
          <p style={{ fontWeight: 'bold' }}>{latest.title} </p>
          <p className="grey-text">{latest.createdAt}</p>
          <div
            style={{ marginTop: 10, marginBottom: 10 }}
            dangerouslySetInnerHTML={{ __html: latest.body }}
          >
          </div>
          <a href={ROUTES.ANNOUNCEMENTS} className="grey-text">More..</a>
        </div>
      </div>
    )
  }
}

export default Announcement;
