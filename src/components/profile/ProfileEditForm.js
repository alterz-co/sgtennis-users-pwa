import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editProfile } from '../../redux/actions/userActions';

class ProfileEditForm extends Component {

  state = {
    name: this.props.user.name,
    gender: this.props.user.gender,
    age: this.props.user.age,
    nationality: this.props.user.nationality,
    phone: this.props.user.phone
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();

    const userId = this.props.userId;

    const editProfile = {
      name: this.state.name,
      gender: this.state.gender,
      age: this.state.age,
      nationality: this.state.nationality,
      phone: this.state.phone
    }

    this.props.editProfile(userId, editProfile);
  }

  render(){
    return(
      <section className="section container">
        <div className="row">
          <div className="col s12 l12">
            <p className="center-align" style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 40 }}>
              Edit Profile
            </p>
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="validate"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <label className="active" htmlFor="name">Name</label>
              </div>
              <div className="input-field" style={{ paddingBottom: 20 }}>
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
                <i className="material-icons prefix">cake</i>
                <input
                  type="text"
                  id="age"
                  name="age"
                  className="validate"
                  value={this.state.age}
                  onChange={this.onChange}
                />
                <label className="active" htmlFor="age">Age</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">public</i>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  className="validate"
                  value={this.state.nationality}
                  onChange={this.onChange}
                />
                <label className="active" htmlFor="nationality">Nationality</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">phone</i>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="validate"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
                <label className="active" htmlFor="phone">Phone number</label>
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
    editProfile: (userId, profile) => dispatch(editProfile(userId, profile))
  }
}

export default connect(null, mapDispatchToProps)(ProfileEditForm);
