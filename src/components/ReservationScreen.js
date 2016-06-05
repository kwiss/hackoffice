import React, { Component } from 'react';

var ReservationScreen = React.createClass({

  getInitialState: function () {
    return {
      reserved: false,
      users: []
    };
  },

    mixins: [ReactFireMixin],

  componentWillMount: function () {
    this.firebaseRef = firebase.database().ref("users");
    
    this.christopheRef = this.firebaseRef.ref("christophe/availability");
    this.ivanRef = this.firebaseRef.ref("ivan/availability");
    this.remiRef = this.firebaseRef.ref("rémi/availability");
    
    /*
    this.christopheRef.on('value', function (dataSnapshot) {
        if(this.state.reserved !== true) {
            this.setState({ reserved: true });
            handleReservation();
        }
      });
      
      this.ivanRef.on('value', function (dataSnapshot) {
        if(this.state.reserved !== true) {
            this.setState({ reserved: true });
            handleReservation();
        }
      });
      
      this.remiRef.on('value', function (dataSnapshot) {
        if(this.state.reserved !== true) {
            this.setState({ reserved: true });
            handleReservation();
        }
      });
      */
  },

    handleReservation: function(){
        this.speech();
    },

    speech: function(){
      
        var msg = new SpeechSynthesisUtterance();
        msg.text = 'Hello ' + this.props.user + ", how are you today ? Have you been here long?";
        msg.lang = 'en-US';

        msg.onend = function(e) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
        };

        speechSynthesis.speak(msg);
        
    },

    render: function () {
        return (<div></div>);
    }
    
});

export default ReservationScreen;