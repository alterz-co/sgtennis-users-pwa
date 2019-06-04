import React, { Component } from 'react';
import LoaderComponent from '../LoaderComponent';

class TournamentHeader extends Component {
  render(){
    const { tournament, tournamentId } = this.props;

    if(!tournament){
      return <LoaderComponent/>
    }

    return(
      <div>
        <p className="center-align" style={{ marginBottom: 40, fontWeight: 'bold' }}>{tournament.title}</p>
        <p className="grey-text">Date: {tournament.date}</p>
        <p className="grey-text">Time: {tournament.time}</p>
        <p className="grey-text">Venue: {tournament.venue}</p>
        <p style={{ paddingBottom: 20 }}><a href={tournament.url} className="grey-text">Link</a></p>
        <span>
          <a href={`/tournament/${tournamentId}/updates`} className="black-text" style={{ paddingLeft: 10 }}>
            Updates
          </a>
          <a href={`/tournament/${tournamentId}/results`} className="black-text" style={{ paddingLeft: 20 }}>
            Results
          </a>
          <a href={`/tournament/${tournamentId}/schedule`} className="black-text" style={{ paddingLeft: 20 }}>
            Schedule
          </a>
          <a href={`/tournament/${tournamentId}/about`} className="black-text" style={{ paddingLeft: 20 }}>
            About
          </a>
        </span>
      </div>
    )
  }
}

export default TournamentHeader;
