import React, { Component } from 'react';
import _ from 'lodash';
import LoaderComponent from '../../../LoaderComponent';

class SinglesMale extends Component {
  render(){
    const { userId, userTournaments } = this.props;

    const singles = _.reject(userTournaments, { 'category': 'Male Doubles' });
    const singlesYear = _.orderBy(singles, ['year'], ['desc']);

    if(!singlesYear){
      return <LoaderComponent/>
    }

    return(
      <div className="container">
        <ul className="collection with-header">
          <li className="collection-header center-align">Singles</li>
          {
            singlesYear && singlesYear.map(single => {
              return single.userId === userId && (
                <li className="collection-item" key={single.id}>
                  <p>{single.tournament}</p>
                  <p className="grey-text">{single.result}, {single.year}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default SinglesMale;
