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
    createTimeline: function (item, index) {
        var key = item[".key"];
        console.log(item);
        return (<Todo key={index} id={key} />);
    },
    render: function () {
        return <div>{this.state.todos.map(this.createTimeline) }</div>;
    }

});

export default Timeline;
