import React, { Component } from 'react';

class InstagramContact extends Component {
  render() {
    return (
      <a href={this.props.instagram} target="_blank">
        <div className="contacts-item instagram"></div>
      </a>
    );
  }
}

export default InstagramContact;
