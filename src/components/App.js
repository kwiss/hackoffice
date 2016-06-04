import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import '../firebase-conf';
import Avatar from './Avatar';
import Timeline from './Timeline';
import DocumentList from './DocumentList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Hello = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {
      meetingStarted: false,
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

  manageSwitch: function () {
    this.setState({ meetingStarted: true });
  },

  render: function () {
    var _this = this;
    var createUserAvatar = function (item, index) {
      return (<Avatar user={item} key={index} />);
    };

    console.log(this.state.meetingStarted);

    if (this.state.meetingStarted) {
      return (
        <div>
          <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
            <Timeline />
          </ReactCSSTransitionGroup>
          <DocumentList />
        </div>
      );
    } else {
      return (<div>
        <div className="profile__list">{this.state.users.map(createUserAvatar) }</div>
        <button onClick={this.manageSwitch}></button> </div>);
    }

  }
});

export default Hello;
