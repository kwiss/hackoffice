import classNames from 'classnames';
import { If, Then, Else } from 'react-if';
import PopupDocument from './PopupDocument';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var DocumentList = React.createClass({

    mixins: [ReactFireMixin],

    getInitialState: function () {
        return {
            selectedImage: null,
            documents: []
        };
    },

    componentWillMount: function () {
        this.firebaseRef = firebase.database().ref("files");
        this.bindAsArray(this.firebaseRef, "documents");
    },

    handleClick: function (event) {
        event.preventDefault();
        var imageUrl = event.currentTarget.getAttribute('src');
        this.setState({ selectedImage: imageUrl });
    },

    createDocuments: function (document) {
        var documentClassImage = classNames({
            'documentImage': true
        });

        var key = document[".key"];
        var value = document[".value"];

        return (<div className="document__item" key={key}>
            <img onClick={this.handleClick} className={documentClassImage} src={value} />
        </div>);
    },

    closeDocumentPopup: function (e) {
        e.preventDefault();
        console.log('closeDocumentPopup');
        this.setState({ selectedImage: null });
    },

    render: function () {

        var selectedImageIsNotNull = this.state.selectedImage !== null;
        console.log('selectedImageIsNotNull: ' + selectedImageIsNotNull);
        return (
            <div className="documents">
                <If condition={ selectedImageIsNotNull }>
                    <Then>
                        <ReactCSSTransitionGroup transitionName="popupDocument" transitionAppear={true} transitionAppearTimeout={500}>
                            <PopupDocument src={this.state.selectedImage} close={this.closeDocumentPopup} />
                        </ReactCSSTransitionGroup>
                    </Then>
                </If>
                <div>{this.state.documents.map(this.createDocuments) }</div>
            </div>
        );
    }
});

export default DocumentList;
