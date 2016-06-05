import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import '../firebase-conf';
import Avatar from './Avatar';
import Timeline from './Timeline';
import DocumentList from './DocumentList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReservationScreen from './ReservationScreen';
import lodash from 'lodash';

const Hello = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {
      roomIsReserved: false,
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

      var usersReady = _.filter(users, function(u) {
        return u.availability === '1';
      });

      console.log(usersReady);

        if(usersReady.length >= 3){
          this.manageSwitch();
        }

      this.setState({ users: users });

    }.bind(this));

  },

  manageSwitch: function () {
    console.log('manageSwitch');
    this.setState({ meetingStarted: true });
  },

  render: function () {
    var _this = this;
    var createUserAvatar = function (item, index) {
      return (<Avatar user={item} key={index} />);
    };

    /*
    if(!this.state.roomIsReserved){
      return (<ReservationScreen />);
    }else
    */


    if (this.state.meetingStarted) {
      return (
        <div className="dashboard">
          <h1 className="lockscreen__title">Summit-level meeting</h1>
          <h2 className="lockscreen__subtitle">Second meeting - June 8 2016</h2>
          <Timeline />
          <DocumentList />
        </div>
      );
    } else {
      return (
        <div className="lockboard">
          <h1 className="lockscreen__title">Summit-level meeting</h1>
          <h2 className="lockscreen__subtitle">Second meeting - June 8 2016</h2>
          <div className="profile__list">{this.state.users.map(createUserAvatar) }</div>
        </div>);
    }

  }
});

export default Hello;
