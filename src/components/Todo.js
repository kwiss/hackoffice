var classNames = require('classnames');

var Todo = React.createClass({

    mixins: [ReactFireMixin],

    getInitialState: function () {
        return {
            checked: 'false'
        };
    },

    componentWillMount: function () {
        var id = this.props.id;
        this.firebaseRef = firebase.database().ref("items/" + id);
        this.bindAsArray(this.firebaseRef, "checked");
    },

    handleClick: function (e) {
        e.preventDefault();
        this.firebaseRef.update({
            checked: !this.state.checked
        });
        this.setState({ checked: !this.state.checked });
    },

    render: function () {
        var todoClass = classNames({
            'todoItem': true,
            'checked': this.state.checked
        });
        return (<div><button className={todoClass} onClick={this.handleClick}></button></div>);
    }

});

export default Todo;