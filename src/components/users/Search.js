import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            placeholder='Search for a GitHub user...'
            onChange={this.onChange}
          />
          <input
            type='submit'
            name='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showClear && (
          <button className='btn clear-btn' onClick={this.props.clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
