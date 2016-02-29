import React, { Component } from 'react';

class FacebookContact extends Component {
  render() {
    return (
      <a href={this.props.facebook} target="_blank">
        <div className="contacts-item facebook"></div>
      </a>
    );
  }
}

export default FacebookContact;
