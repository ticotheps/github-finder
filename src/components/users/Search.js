import React, { Component } from 'react';
import '../../App.css';

export class Search extends Component {
  render() {
    return (
      <div>
        <form className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search your List of follows on GitHub...'
          />
          <input
            type='submit'
            name='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
