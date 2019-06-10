import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title='GitHub Finder' />
      </Fragment>
    );
  }
}

export default App;
