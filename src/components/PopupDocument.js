import classNames from 'classnames';

var PopupDocument = React.createClass({

    render: function () {
        return (<div className="popupDocument-Content">
            <span className="close" onClick={this.props.close} dangerouslySetInnerHTML={{__html: "<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><path fill="#000000" d="M50,0.003C22.43,0.003,0,22.431,0,50c0,27.569,22.43,49.997,50,49.997c27.572,0,50-22.428,50-49.997   C100,22.431,77.572,0.003,50,0.003z M50,94.229C25.611,94.229,5.769,74.389,5.769,50C5.769,25.613,25.611,5.772,50,5.772   S94.231,25.613,94.231,50C94.231,74.389,74.389,94.229,50,94.229z"/></g><g><path fill="#000000" d="M59.447,36.474L50,45.921l-9.447-9.448c-1.126-1.126-2.952-1.127-4.079,0c-1.126,1.126-1.126,2.953,0,4.079   L45.921,50l-9.448,9.447c-1.126,1.127-1.126,2.953,0,4.079c1.128,1.128,2.953,1.127,4.08,0.001L50,54.079l9.447,9.447   c1.126,1.126,2.953,1.127,4.079,0.001c1.128-1.128,1.126-2.954,0-4.08L54.079,50l9.447-9.447c1.126-1.125,1.128-2.952,0-4.079   C62.4,35.347,60.573,35.348,59.447,36.474z"/></g></svg>" }}>
                
            </span>
            <img src={this.props.src} /> 
        </div>);
    }
    
});

export default PopupDocument;