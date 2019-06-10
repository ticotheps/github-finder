import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title='GitHub Finder' icon='fab fa-github' />
      </Fragment>
    );
  }
}

export default App;
