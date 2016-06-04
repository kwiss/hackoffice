import Photo from './Photo';
import Note from './Note';
import Todo from './Todo';

var Timeline = React.createClass({

    mixins: [ReactFireMixin],

    getInitialState: function () {
        return {
            todos: []
        };
    },

    componentWillMount: function () {
        this.firebaseRef = firebase.database().ref("todos");
        this.bindAsArray(this.firebaseRef, "todos");
    },

    render: function () {

        var _this = this;
        var createTimeline = function (item, index) {
            var key = item[".key"];
            return (<Todo key={index} id={key} />);
        };
        return <div>{this.state.todos.map(createTimeline) }</div>;
    }

});

export default Timeline;