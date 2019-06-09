import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe';

    return (
      <Fragment>
        <h1>Hello {name.toUpperCase()}</h1>
      </Fragment>
    );
  }
}

export default App;
