import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetPassword } from '../../redux/actions/authActions';

import * as ROUTES from '../../constants/routes';

class ResetPassword extends Component {

  state = {
    email: '',
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

  isFormEmpty = ({ email }) => {
    return email === '';
  }

  onSubmit = event => {
    event.preventDefault();
    if(this.isFormValid()){
      this.props.resetPassword(this.state.email)
      this.setState({
        email: '',
        error: ''
      });
    }
  }

  render(){
    return(
      <section className="section container">
        <div className="row">
          <div className="col s12 l12">
            <h3 className="center-align" style={{ marginBottom: 40 }}>Reset Password</h3>
            {this.state.error && <p className="red-text">{this.state.error}</p>}
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
                <label htmlFor="email">Email Address</label>
              </div>
              <input
                type="submit"
                name="Send"
                className="btn-large col s12 m12 l12 black white-text"
                style={{ marginTop: 20, marginBottom: 20 }}
              />
            </form>
            <p className="center-align">
              Not registered with us yet?{' '}
              <a href={ROUTES.REGISTER} className="grey-text">Register</a>
            </p>
            <p className="center-align">
              Already have an account?{' '}
              <a href={ROUTES.LOGIN} className="grey-text">Login</a>
            </p>
          </div>
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (email) => dispatch(resetPassword(email))
  }
}

export default connect(null, mapDispatchToProps)(ResetPassword);
