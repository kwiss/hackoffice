var Avatar = React.createClass({

    render: function () {
        return (<div className={this.props.user.availability}>{this.props.user.name}</div>)
    }

});

export default Avatar;