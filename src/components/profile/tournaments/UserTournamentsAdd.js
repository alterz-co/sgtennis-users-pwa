import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTournament } from '../../../redux/actions/userActions';

import * as ROUTES from '../../../constants/routes';

class UserTournamentsAdd extends Component {

  state = {
    tournament: '',
    year: '',
    category: '',
    result: '',
    error: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  isFormValid = () => {
    if(this.isFormEmpty(this.state)){
      this.setState({ error: 'Fill in all fields with asterisk' });
      return false;
    } else {
      return true;
    }
  }

  isFormEmpty = ({ tournament, year, category, result }) => {
    return tournament === '' || year === '' || category === '' || result === '';
  }

  onSubmit = event => {
    event.preventDefault();
    if(this.isFormValid()){
      this.setState({ error: '' });
      const year = Number(this.state.year);
      const tournament = {
        tournament: this.state.tournament,
        year,
        category: this.state.category,
        result: this.state.result
      }
      this.props.addTournament(tournament);
      this.setState({
        tournament: '',
        year: '',
        category: '',
        result: ''
      });
    }
  }

  render(){

    const { auth } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    return(
      <section className="section container" id="register">
        <div className="row">
          <div className="col s12 l12">
            <p className="center-align" style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 40 }}>
              Add Tournament
            </p>
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  id="tournament"
                  name="tournament"
                  value={this.state.tournament}
                  onChange={this.onChange}
                />
                <label htmlFor="tournament">Tournament</label>
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTournament: (tournament) => dispatch(addTournament(tournament))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTournamentsAdd);
