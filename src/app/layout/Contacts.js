import React, { Component } from 'react';
import BehanceContact from './BehanceContact';
import EmailContact from './EmailContact';
import InstagramContact from './InstagramContact';
import FacebookContact from './FacebookContact';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: {
        behance: 'https://www.behance.net/tanya-klimenko',
        facebook: 'https://www.facebook.com/tannia.klimenko',
        instagram: 'https://www.instagram.com/sol_invictus233/',
        email: 'mailto:tannia.klimenko@gmail.com'
      }
    }
  }

  render() {
    return (
      <div className="contacts">
        <BehanceContact behance={this.state.contacts.behance} />
        <EmailContact email={this.state.contacts.email} />
        <InstagramContact instagram={this.state.contacts.instagram} />
        <FacebookContact facebook={this.state.contacts.facebook} />
      </div>
    );
  }
}

export default Contacts;
