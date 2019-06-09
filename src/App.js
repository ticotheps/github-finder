import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe';
    const loading = false;
    return (
      <Fragment>
        {loading ? <h4>Loading...</h4> : <h1>Hello {name}</h1>}
      </Fragment>
    );
  }
}

export default App;
