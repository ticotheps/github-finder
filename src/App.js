import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  foo = () => 'Bars';

  render() {
    return (
      <Fragment>
        <h1>Hello {this.foo()}</h1>
      </Fragment>
    );
  }
}

export default App;
