import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import '../firebase-conf';

const Hello = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {
      data: {
        isActive: false
      }
    };
  },

  componentWillMount: function () {
    this.firebaseRef = firebase.database().ref("beacons");
    this.bindAsArray(this.firebaseRef.limitToLast(25), 'beacons');

    var self = this;

    this.firebaseRef.on("value", function (dataSnapshot) {
      
    console.log(dataSnapshot.val());
      self.setState({ isActive: dataSnapshot.val() });
    });

   

  },

  render: function () {
    
console.log(this.state.data.isActive);
    
    if (this.state.data.isActive) {
      return (<div class="isActive">ACTIVE</div>)
    } else {
      return (<div>NON ACTIVE</div>)
    }

  }
});

export default Hello;
