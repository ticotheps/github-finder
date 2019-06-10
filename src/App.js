import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4];
    return (
      <Fragment>
        <Navbar title={numbers} />
      </Fragment>
    );
  }
}

export default App;
