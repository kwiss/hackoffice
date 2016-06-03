import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import '../firebase-conf';

const Hello = React.createClass({

  mixins: [ReactFireMixin],

  componentWillMount: function () {

    var ref = firebase.database().ref("items");
    this.bindAsArray(ref, "items");

    this.firebaseRef.on("child_added", function (dataSnapshot) {

      console.log(dataSnapshot.val());

      this.items.push(dataSnapshot.val());
      this.setState({
        items: this.items
      });
    }.bind(this));

  },

  render() {
    return (
      <h1>Hello test hackoffice, {this.props.name}!</h1>
    )
  }
});

export default Hello;
