import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios
      .get('https://api.github.com/users')
      .then(res => console.log(res.data));
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </Fragment>
    );
  }
}

export default App;

// Section 3, video 13: Stateless Functional Components
