import classNames from 'classnames';

var PopupDocument = React.createClass({
    render: function () {
        return (<div className="popupDocument-Content">
            <span className="close" onClick={this.props.closePopup}>
                <img src="../../images/close.svg" />
            </span>
            <img src={this.props.src} /> 
        </div>);
    }
    
});

export default PopupDocument;