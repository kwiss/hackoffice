import Photo from './Photo';
import Note from './Note';
import Todo from './Todo';

var Timeline = React.createClass({

    mixins: [ReactFireMixin],

    getInitialState: function () {
        return {
            items: []
        };
    },
    componentWillMount: function () {
        this.firebaseRef = firebase.database().ref("items");
        this.bindAsArray(this.firebaseRef, "items");
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
        return <div className="timeline">{this.state.items.map(this.createTimeline) }</div>;
    }

});

export default Timeline;
