import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux';
import { addUpdate } from '../../../redux/actions/tournamentActions';

class TournamentUpdatesAdd extends Component {

  state = {
    body: ''
  }

  handleBodyChange = value => {
    this.setState({
      body: value
    });
  }

  onSubmit = event => {
    event.preventDefault();
    const update = {
      body: this.state.body
    }
    this.props.addUpdate(this.props.tournamentId, update);
    this.setState({
      body: ''
    });
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <ReactQuill
          value={this.state.body}
          onChange={this.handleBodyChange}
          style={{ height: 200, paddingBottom: 50 }}
        />
        <input
          type="submit"
          name="Login"
          className="btn col s12 m12 l12 black white-text"
          style={{ marginTop: 40, marginBottom: 20 }}
        />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUpdate: (tournamentId, update) => dispatch(addUpdate(tournamentId, update))
  }
}

export default connect(null, mapDispatchToProps)(TournamentUpdatesAdd);
