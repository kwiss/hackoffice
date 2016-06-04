import classNames from 'classnames';

var Photo = React.createClass({

    render: function () {

        var pictureClass = classNames({
            'pictureItem': true
        });

        return (
            <div>
                <label>{this.props.date}</label>
                <img className={pictureClass} src={this.props.url} />
                <img src={this.props.author.imageUrl}/>
            </div>)

    }

});

export default Photo;