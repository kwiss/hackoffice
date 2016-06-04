import classNames from 'classnames';

var PopupDocument = React.createClass({

    render: function () {
        return (<div className="popupDocument-Content">
            <div className="close" onClick={this.props.close}></div>
            <img src={this.props.src} />
        </div>);
    }
    
});

export default PopupDocument;