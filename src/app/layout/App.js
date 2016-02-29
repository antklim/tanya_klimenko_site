import React, { Component } from 'react';
import LeftPane from './LeftPane';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <LeftPane />
        <Main />
      </div>
    );
  }
}

export default App;
