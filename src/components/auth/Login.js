import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';

import * as ROUTES from '../../constants/routes';

class Login extends Component {

  state = {
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
      this.setState({ error: 'Fill in all fields' });
      return false;
    } else {
      return true;
    }
  }

  isFormEmpty = ({ email, password }) => {
    return email === '' || password === '';
  }

  onSubmit = event => {
    event.preventDefault();
    if(this.isFormValid()){
      this.props.login(this.state);
      this.setState({
        email: '',
        password: '',
        error: ''
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
            <h3 className="center-align" style={{ marginBottom: 40 }}>Login</h3>
            {this.state.error && <p className="red-text">{this.state.error}</p>}
            {this.props.authError && <p className="red-text">{this.props.authError}</p>}
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <label htmlFor="email">Your Email</label>
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
                <label htmlFor="password">Your Password</label>
              </div>
              <input
                type="submit"
                name="Login"
                className="btn-large col s12 m12 l12 black white-text"
                style={{ marginTop: 20, marginBottom: 20 }}
              />
              {this.state.error && <p className="center-align red-text">{this.state.error.message}</p>}
              <p className="center-align">
                Not registered with us yet?{' '}
                <a href={ROUTES.REGISTER} className="grey-text">Register</a>
              </p>
              <p className="center-align">
                Forgot your password?{' '}
                <a href={ROUTES.PASSWORD_RESET} className="grey-text">Reset Password</a>
              </p>
            </form>
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
    login: (creds) => dispatch(login(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
