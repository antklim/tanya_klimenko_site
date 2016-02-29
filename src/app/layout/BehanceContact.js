import React, { Component } from 'react';

class BehanceContact extends Component {
  render() {
    return (
      <a href={this.props.behance} target="_blank">
        <div className="contacts-item behance"></div>
      </a>
    );
  }
}

export default BehanceContact;
