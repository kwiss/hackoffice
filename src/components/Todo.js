var classNames = require('classnames');

var Todo = React.createClass({

    mixins: [ReactFireMixin],

/*
    componentWillMount: function () {
        var id = this.props.id;
        this.firebaseRef = firebase.database().ref("todos/" + id);
        this.bindAsObject(this.firebaseRef, "data");
        console.log("todos/" + id);
    },
*/

    handleClick: function (e) {
        e.preventDefault();
        this.props.handleChecked(this.props.id, !this.props.checked);
    },

    render: function () {


      var todoClass = classNames({
      'timeline__item': true,
      'checked': this.props.checked
      });

      return (
        <div className={todoClass}>
          <button className="timeline__checkbox" onClick={this.handleClick}>
          </button>
          <div className="timeline__content">
            <div className="timeline__item-label">TODO</div>
            <span className="timeline__item-text">{this.props.message}</span>
            <img src={this.props.toGuestProfileImageUrl} className="timeline__item-image"/>
            <div className="timeline__item-guest">{this.props.toGuest}</div>
          </div>
        </div>
      );
    }

});

export default Todo;
