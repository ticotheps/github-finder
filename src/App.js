import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const foo = () => 'Bar';

    return (
      <Fragment>
        <h1>Hello {foo()}</h1>
      </Fragment>
    );
  }
}

export default App;
