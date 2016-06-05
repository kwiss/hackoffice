import Photo from './Photo';
import Note from './Note';
import Todo from './Todo';
import _ from 'lodash';

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
    
    handleChecked: function(id, checked) {
        
        var changeTodo = _.find(this.state.todos, function(todo){
            return ;
        });
        
        var todos = [];
        this.state.todos.forEach(function(todo){
           if(todo[".key"] == id){
               todo.checked = checked;
           }
           todos.push(todo);
        });
        
        this.setState({ todos: todos });
    },
    
    createTimeline: function (item, index) {
        var key = item[".key"];
        return (<Todo key={index} id={key} message={item.message} checked={item.checked} toGuest={item.toGuest} handleChecked={this.handleChecked} toGuestProfileImageUrl={item.toGuestProfileImageUrl} />);
    },
    render: function () {
        return <div className="timeline"><div className="timeline__wrap">{this.state.todos.map(this.createTimeline) }</div><div className="timeline__line"></div></div>;
    }

});

export default Timeline;
