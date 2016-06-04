import classNames from 'classnames';

var Document = React.createClass({

    getInitialState: function () {
        return {
            documents: []
        };
    },

    componentWillMount: function () {
        this.firebaseRef = firebase.database().ref("documents");
        this.bindAsArray(this.firebaseRef, "documents");
    },

    render: function () {

        var pictureClass = classNames({
            'documentImage': true
        });

        var createDocuments = function (document) {
            var key = document[".key"];
            return (<div key={key}>
                <img className={documentImage} src={document.imageUrl} />
            </div>);
        };
        return <div>{this.state.documents.map(createDocuments) }</div>;
    }

});

export default Document;