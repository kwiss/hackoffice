var Avatar = React.createClass({

    status: function(type) {
      switch (type) {
        case 1:
          return("In meeting room");
        case 2:
          return("Incoming");
        case 3:
          return("Not available");
        default:
            return("deep in the space");
      }
      return("test");
    },

    render: function () {

        var availabilityText = 'test';
        var avaibilityClass = 'profile';
        if (this.props.user.availability) {
            avaibilityClass += " profile--" + this.props.user.availability;
            availabilityText = this.status(this.props.user.availability);
        }

        return (
            <div className={avaibilityClass}>
                <div className="profile__avatar">
                  <img className="profile__avatar-image" src={this.props.user.imageUrl} alt={this.props.user.name} />
                  <span className="status"></span>
                  <span className="badge"><span className="badge-text">{availabilityText}</span></span>
                </div>
                <div className="profile__informations">
                  <h3 className="profile-name">
                    {this.props.user.name}
                  </h3>
                  <h4 className="profile-position">Doctor Designer</h4>
                  <span className="profile__informations-title">Mobile phone</span>
                  <span className="profile__informations-content">+33 6 83 92 03 92</span>
                  <span className="profile__informations-title">Email adress</span>
                  <span className="profile__informations-content">johnz@planetexpress.com</span>
                </div>
            </div>)
    }

});

export default Avatar;
