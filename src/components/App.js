import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import '../firebase-conf';
import Avatar from './Avatar';
import Timeline from './Timeline';
import DocumentList from './DocumentList';
import ReservationScreen from './ReservationScreen';
import lodash from 'lodash';

const Hello = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {
      homepage: true,
      meetingFinished: false,
      roomIsReserved: false,
      meetingStarted: false,
      users: []
    };
  },

  componentWillMount: function () {
    this.firebaseRef = firebase.database().ref("users");

    firebase.database().ref("meetingIsClosed").on('child_added', function (dataSnapshot) {
      this.setState({ meetingFinished: true });
    }.bind(this));

    firebase.database().ref("meetingIsClosed").on('child_removed', function (dataSnapshot) {
      this.setState({ meetingFinished: false });
    }.bind(this));

    firebase.database().ref("homepage").on('child_added', function (dataSnapshot) {
      this.setState({ homepage: false });
    }.bind(this));

    firebase.database().ref("homepage").on('child_removed', function (dataSnapshot) {
      this.setState({ homepage: true });
    }.bind(this));

    this.firebaseRef.on('value', function (dataSnapshot) {
      var users = [];
      dataSnapshot.forEach(function (childSnapshot) {
        var user = childSnapshot.val();
        user['name'] = childSnapshot.key;
        users.push(user);
      }.bind(this));

      var usersReady = _.filter(users, function (u) {
        return u.availability === '1';
      });

      if (usersReady.length >= 3) {
        this.manageSwitch();
      }

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

    /*
    if(!this.state.roomIsReserved){
      return (<ReservationScreen />);
    }else
    */
    
    if(this.state.homepage === true){
      return (<div>HOMEPAGE</div>)
    }else if (this.state.meetingFinished  === true) {
      return (<div>FINISHED</div>)
    } else if (this.state.meetingStarted === true) {

      return (
        <div className="dashboard">
          <div className="logo"></div>
          <h1 className="lockscreen__title">Summit-level meeting</h1>
          <h2 className="lockscreen__subtitle">Second meeting - June 8 2016</h2>
          <Timeline />
          <DocumentList />
        </div>
      );
    } else {
      return (
        <div className="lockboard">
          <div className="logo"></div>
          <h1 className="lockscreen__title">Summit-level meeting</h1>
          <h2 className="lockscreen__subtitle">Second meeting - June 8 2016</h2>
          <div className="profile__list">{this.state.users.map(createUserAvatar) }</div>
        </div>);
    }

  }
});

export default Hello;
