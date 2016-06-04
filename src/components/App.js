import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import '../firebase-conf';
import Avatar from './Avatar'

const Hello = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {
      users: []
    };
  },

  componentWillMount: function () {
    this.firebaseRef = firebase.database().ref("users");

    this.firebaseRef.on('value', function (dataSnapshot) {
      var users = [];
      dataSnapshot.forEach(function (childSnapshot) {
        var user = childSnapshot.val();
        user['name'] = childSnapshot.key;
        users.push(user);
      }.bind(this));

      this.setState({ users: users });

    }.bind(this));

  },

  render: function () {
    var _this = this;
    var createItem = function (item, index) {
      return (
        <Avatar user={item} key={index} />
      );
    };
    return <div>{this.state.users.map(createItem)}</div>;
  }
});

export default Hello;
