import React, { Component } from 'react';
import _ from 'lodash';
import LoaderComponent from '../../../LoaderComponent';

class DoublesFemale extends Component {
  render(){
    const { userId, userTournaments } = this.props;

    const doubles = _.reject(userTournaments, { 'category': 'Female Singles' });
    const doublesYear = _.orderBy(doubles, ['year'], ['desc']);

    if(!doublesYear){
      return <LoaderComponent/>
    }

    return(
      <div className="container">
        <ul className="collection with-header">
          <li className="collection-header center-align">Doubles</li>
          {
            doublesYear && doublesYear.map(double => {
              return double.userId === userId && (
                <li className="collection-item" key={double.id}>
                  <p>{double.tournament}</p>
                  <p className="grey-text">{double.result}, {double.year}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default DoublesFemale;
