import React, { Component } from 'react';
import PingPong from './PingPong';
import Contacts from './Contacts';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <PingPong />
        <Contacts />
      </div>
    );
  }
}

export default Main;
