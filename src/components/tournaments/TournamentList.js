import React, { Component } from 'react';

class TournamentList extends Component {
  render(){
    return(
      <div className="row" style={{ marginTop: 20 }}>
      {
        this.props.tournaments && this.props.tournaments.map(tournament => {
          return (
            <div className="col s12 l12" key={tournament.id}>
              <div className="card">
                <div className="card-content">
                  <p>{tournament.title}</p>
                  <p className="grey-text">{tournament.date}, {tournament.time}</p>
                </div>
                <div className="card-action">
                  <a href={`/tournament/${tournament.id}`} className="grey-text">Details</a>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default TournamentList;
