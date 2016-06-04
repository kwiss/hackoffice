const Avatar = React.createClass({

    
    mixins: [ReactFireMixin],
    
    componentWillMount: function () {
    this.firebaseRef = firebase.database().ref("items");
    this.bindAsArray(this.firebaseRef.limitToLast(25), 'items');
    this.firebaseRef.on("child_added", function (dataSnapshot) {
      console.log(dataSnapshot.val());
    });
  },
  
});

export default Avatar;