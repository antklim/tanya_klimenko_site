import React, { Component } from 'react';

class EmailContact extends Component {
  render() {
    return (
      <a href={this.props.email}>
        <div className="contacts-item email"></div>
      </a>
    );
  }
}

export default EmailContact;
