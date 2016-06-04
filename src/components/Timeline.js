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
        return (<Todo key={index} id={key} />);
    },
    render: function () {
        return <div className="timeline"><div className="timeline__wrap">{this.state.todos.map(this.createTimeline) }</div><div className="timeline__line"></div></div>;
    }

});

export default Timeline;
