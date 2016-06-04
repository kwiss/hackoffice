var Avatar = React.createClass({

    render: function () {

        var avaibilityClass = 'Badge';
        if (this.props.user.availability) {
            avaibilityClass += ' isAvailable';
        }

        return (
            <div className={avaibilityClass}>
                {this.props.user.name}
                <img class="Badge-profileImage" src={this.props.user.imageUrl} alt={this.props.user.name} />
            </div>)
    }

});

export default Avatar;