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

        if(usersReady.length >= 3){
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
<<<<<<< HEAD
    
    if(this.state.meetingFinished){
      return (<div>FINISHED</div>)
    }
=======
>>>>>>> 8c84001114a584a37ea5870731fc525dad399df5

    if (this.state.meetingStarted) {
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
