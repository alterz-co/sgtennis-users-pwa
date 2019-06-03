import React, { Component } from 'react';

class FemaleDoubles extends Component {
  render(){
    const { userId, femaleDoubles } = this.props;

    return(
      <div className="container">
        <ul className="collection with-header">
          <li className="collection-header center-align">Doubles</li>
          {
            femaleDoubles && femaleDoubles.map(femaleDouble => {
              return femaleDouble.userId === userId && (
                <li className="collection-item" key={femaleDouble.id}>
                  <div className="row" style={{ paddingTop: 10 }}>
                    <div className="col s8 l8">
                      <p>{femaleDouble.tournament}</p>
                    </div>
                    <div className="col s4 l4">
                      <a href={`/usertournament/edit/${femaleDouble.id}`} className="btn-floating btn-small white">
                        <i className="material-icons black-text">edit</i>
                      </a>
                    </div>
                  </div>
                  <p className="grey-text">{femaleDouble.result}, {femaleDouble.year}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default FemaleDoubles;
