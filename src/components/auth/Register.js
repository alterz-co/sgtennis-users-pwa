import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/authActions';
import HomeNav from '../navigation/HomeNav';

import * as ROUTES from '../../constants/routes';

class Register extends Component {

  state = {
    name: '',
    gender: '',
    email: '',
    password: '',
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

  isFormEmpty = ({ name, gender, email, password }) => {
    return name === '' || gender === '' || email === '' || password === '';
  }

  onSubmit = event => {
    event.preventDefault();
    if(this.isFormValid()){
      this.setState({ error: '' });
      const newUser = {
        name: this.state.name,
        gender: this.state.gender,
        email: this.state.email,
        password: this.state.password
      }
      this.props.register(newUser);
      this.setState({
        name: '',
        gender: '',
        email: '',
        password: ''
      });
    }
  }

  render(){
    if(this.props.auth.uid){
      return <Redirect to={ROUTES.HOME}/>
    }

    return(
      <section className="section container">
        <div className="row">
          <div className="col s12 l12">
            <h3 className="center-align" style={{ marginBottom: 40 }}>Register</h3>
            <p style={{ marginTop: 20 }}>Hello! <span role="img" aria-label="wave">👋</span></p>
            <p style={{ marginBottom: 20 }}>Before you proceed there are a couple of things you need to be aware of.
              This website is currently in beta mode: this means that it is not very stable at the moment.
              There may be crashes, data loss and speed/performance issues.
            </p>
            {this.state.error && <p className="red-text">{this.state.error}</p>}
            {this.props.authError && <p className="red-text">{this.props.authError}</p>}
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <label htmlFor="name">Your Name *</label>
              </div>
              <div className="input-field">
                <p>
                  <label>
                    <input name="gender" type="checkbox" value="Male" onChange={this.onChange}/>
                    <span>Male</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="gender" type="checkbox" value="Female" onChange={this.onChange}/>
                    <span>Female</span>
                  </label>
                </p>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <label htmlFor="email">Your Email *</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">lock</i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <label htmlFor="password">Your Password *</label>
              </div>
              <input
                type="submit"
                name="Register"
                className="btn-large col s12 m12 l12 black white-text"
                style={{ marginTop: 20, marginBottom: 20 }}
              />
              {this.state.error && <p className="center-align red-text">{this.state.error.message}</p>}
              <p className="center-align">
                Already have an account?{' '}
                <a href={ROUTES.LOGIN} className="grey-text">Login</a>
              </p>
            </form>
            <HomeNav/>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newUser) => dispatch(register(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
