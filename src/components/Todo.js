var classNames = require('classnames');

var Todo = React.createClass({

    mixins: [ReactFireMixin],

    getInitialState: function () {
        return {
            data: {},
        };
    },

    componentWillMount: function () {
        var id = this.props.id;
        this.firebaseRef = firebase.database().ref("todos/" + id);
        this.bindAsObject(this.firebaseRef, "data");
    },

    handleClick: function (e) {
        e.preventDefault();
        this.firebaseRef.update({
            checked: !this.state.data.checked
        });
        this.setState({ checked: !this.state.data.checked });
    },

    render: function () {
      var todoClass = classNames({
      'timeline__checkbox': true,
      'checked': this.state.data.checked
      });

      console.log(this.state.data);

      return (
        <div className="timeline__item">
          <button className={todoClass} onClick={this.handleClick}>
          </button>
          <span className="timeline__item-text">{this.state.data.message}</span>
        </div>
      );
    }

});

export default Todo;
