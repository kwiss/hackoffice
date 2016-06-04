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
        switch (item.type) {
            case 'todo':
                var key = item[".key"];
                return (<Todo key={index} id={key} />);
            default:
                return (<div key={index}>test</div>);
        }
    },
    render: function () {

        var _this = this;
<<<<<<< HEAD
        var createTimeline = function (item, index) {
            var key = item[".key"];
            return (<Todo key={index} id={key} />);
        };
        return <div>{this.state.todos.map(createTimeline) }</div>;
=======
        return <div className="timeline">{this.state.items.map(this.createTimeline) }</div>;
>>>>>>> 0ceb3fa133e83dc2d76c820ed2d985a795d22620
    }

});

export default Timeline;
