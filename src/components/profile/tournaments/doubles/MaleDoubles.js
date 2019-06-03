import React, { Component } from 'react';

class MaleDoubles extends Component {
  render(){
    const { userId, maleDoubles } = this.props;

    return(
      <div className="container">
        <ul className="collection with-header">
          <li className="collection-header center-align">Doubles</li>
          {
            maleDoubles && maleDoubles.map(maleDouble => {
              return maleDouble.userId === userId && (
                <li className="collection-item" key={maleDouble.id}>
                  <div className="row" style={{ paddingTop: 10 }}>
                    <div className="col s8 l8">
                      <p>{maleDouble.tournament}</p>
                    </div>
                    <div className="col s4 l4">
                      <a href={`/usertournament/edit/${maleDouble.id}`} className="btn-floating btn-small white">
                        <i className="material-icons black-text">edit</i>
                      </a>
                    </div>
                  </div>
                  <p className="grey-text">{maleDouble.result}, {maleDouble.year}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default MaleDoubles;
