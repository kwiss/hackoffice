import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';

const Hello = React.createClass({
  render() {
    return(
      <h1>Hello test hackoffice, {this.props.name}!</h1>
    )
  }
});

export default Hello;
