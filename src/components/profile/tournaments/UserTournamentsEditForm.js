import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTournament } from '../../../redux/actions/userActions';

class UserTournamentsEditForm extends Component {

  state = {
    tournament: this.props.tournament.tournament,
    year: this.props.tournament.year,
    category: this.props.tournament.category,
    result: this.props.tournament.result,
    error: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();
    let year;

    if(this.state.year !== this.props.tournament.year){
      year = Number(this.state.year);
    } else {
      year = this.props.tournament.year;
    }

    const updateTournament = {
      tournament: this.state.tournament,
      year,
      category: this.state.category,
      result: this.state.result
    }

    const tournamentId = this.props.tournamentId;
    this.props.editTournament(tournamentId, updateTournament);
  }

  render(){
    return(
      <section className="section container">
        <div className="row">
          <div className="col s12 l12">
            <p className="center-align" style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 40 }}>
              Edit Tournament
            </p>
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  id="tournament"
                  name="tournament"
                  className="validate"
                  value={this.state.tournament}
                  onChange={this.onChange}
                />
                <label className="active" htmlFor="tournament">Tournament</label>
              </div>
              <div className="input-field">
                <p>Year</p>
                <p>
                  <label>
                    <input name="year" type="checkbox" value="2019" onChange={this.onChange}/>
                    <span>2019</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="year" type="checkbox" value="2018" onChange={this.onChange}/>
                    <span>2018</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="year" type="checkbox" value="2017" onChange={this.onChange}/>
                    <span>2017</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="year" type="checkbox" value="2016" onChange={this.onChange}/>
                    <span>2016</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="year" type="checkbox" value="2015" onChange={this.onChange}/>
                    <span>2015</span>
                  </label>
                </p>
              </div>
              <div className="input-field">
                <p>Category</p>
                <p>
                  <label>
                    <input name="category" type="checkbox" value="Male Singles" onChange={this.onChange}/>
                    <span>Male Singles</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="category" type="checkbox" value="Female Singles" onChange={this.onChange}/>
                    <span>Female Singles</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="category" type="checkbox" value="Male Doubles" onChange={this.onChange}/>
                    <span>Male Doubles</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="category" type="checkbox" value="Female Doubles" onChange={this.onChange}/>
                    <span>Female Doubles</span>
                  </label>
                </p>
              </div>
              <div className="input-field">
                <p>Result</p>
                <p>
                  <label>
                    <input name="result" type="checkbox" value="Winner" onChange={this.onChange}/>
                    <span>Winner</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="result" type="checkbox" value="Finalist" onChange={this.onChange}/>
                    <span>Finalist</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="result" type="checkbox" value="Semi-Finalist" onChange={this.onChange}/>
                    <span>Semi-Finalist</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="result" type="checkbox" value="Quarter-Finalist" onChange={this.onChange}/>
                    <span>Quarter-Finalist</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="result" type="checkbox" value="R16" onChange={this.onChange}/>
                    <span>R16</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="result" type="checkbox" value="R32" onChange={this.onChange}/>
                    <span>R32</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="result" type="checkbox" value="R64" onChange={this.onChange}/>
                    <span>R64</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="result" type="checkbox" value="R128" onChange={this.onChange}/>
                    <span>R128</span>
                  </label>
                </p>
              </div>
              <input
                type="submit"
                name="Save"
                className="btn-large col s12 m12 l12 black white-text"
                style={{ marginTop: 20, marginBottom: 20 }}
              />
            </form>
          </div>
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTournament: (tournamentId, tournament) => dispatch(editTournament(tournamentId, tournament))
  }
}

export default connect(null, mapDispatchToProps)(UserTournamentsEditForm);
