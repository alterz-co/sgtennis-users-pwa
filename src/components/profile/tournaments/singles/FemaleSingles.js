import React, { Component } from 'react';

class FemaleSingles extends Component {
  render(){
    const { userId, femaleSingles } = this.props;

    return(
      <div className="container">
        <ul className="collection with-header">
          <li className="collection-header center-align">Singles</li>
          {
            femaleSingles && femaleSingles.map(femaleSingle => {
              return femaleSingle.userId === userId && (
                <li className="collection-item" key={femaleSingle.id}>
                  <div className="row" style={{ paddingTop: 10 }}>
                    <div className="col s8 l8">
                      <p>{femaleSingle.tournament}</p>
                    </div>
                    <div className="col s4 l4">
                      <a href={`/usertournament/edit/${femaleSingle.id}`} className="btn-floating btn-small white">
                        <i className="material-icons black-text">edit</i>
                      </a>
                    </div>
                  </div>
                  <p className="grey-text">{femaleSingle.result}, {femaleSingle.year}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default FemaleSingles;
