import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../LoaderComponent';
import ReactGA from 'react-ga';

import * as ROUTES from '../../constants/routes';

class Announcements extends Component {

  componentDidMount(){
    ReactGA.initialize('UA-142471653-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(){
    const { auth, announcements } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!announcements){
      return <LoaderComponent/>
    }

    return(
      <div className="container">
        <p style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
          <span role="img" aria-label="loud-hailer" style={{ paddingLeft: 10, paddingRight: 20 }}>📢</span>
          Announcements
        </p>
        <ul className="collection">
        {
          announcements && announcements.map(announcement => {
            return (
              <li key={announcement.id} className="collection-item">
                <p style={{ fontWeight: 'bold' }}>{announcement.title}</p>
                <p className="grey-text">{announcement.createdAt}</p>
                <div
                  style={{ marginTop: 10, marginBottom: 10 }}
                  dangerouslySetInnerHTML={{ __html: announcement.body }}
                >
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
    announcements: state.firestore.ordered.announcements
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'announcements', orderBy: ['createdAt', 'desc'] }
  ])
)(Announcements);
