import React, { Component } from 'react';

class MaleSingles extends Component {
  render(){
    const { userId, maleSingles } = this.props;

    return(
      <div className="container">
        <ul className="collection with-header">
          <li className="collection-header center-align">Singles</li>
          {
            maleSingles && maleSingles.map(maleSingle => {
              return maleSingle.userId === userId && (
                <li className="collection-item" key={maleSingle.id}>
                  <div className="row" style={{ paddingTop: 10 }}>
                    <div className="col s8 l8">
                      <p>{maleSingle.tournament}</p>
                    </div>
                    <div className="col s4 l4">
                      <a href={`/usertournament/edit/${maleSingle.id}`} className="btn-floating btn-small white">
                        <i className="material-icons black-text">edit</i>
                      </a>
                    </div>
                  </div>
                  <p className="grey-text">{maleSingle.result}, {maleSingle.year}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default MaleSingles;
