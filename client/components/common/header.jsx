LoginLink = React.createClass({
	render() {
			return <li><a href={Router.pathFor( 'login' )}>Login/Register</a></li>
	}
});
LogoutLink = React.createClass({
	logout(event) {
		event.preventDefault();
		Meteor.logout();
	},
	render() {
		return <li><a href="#" onClick={this.logout}>Logout</a></li>
	}
});

PageHeader = React.createClass({
	// This mixin makes the getMeteorData method work
	mixins: [ReactMeteorData],

	// Loads items from the Tasks collection and puts them on this.data.tasks
	getMeteorData() {
		return {
			currentUser: Meteor.user()
		}
	},
	render() {
		var loginLink;
			if (this.data.currentUser) {
			  loginLink = <LogoutLink />;
			} else {
			  loginLink = <LoginLink />;
			}
    return <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">TaskMiser</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
					<ul className="nav navbar-nav pull-right">
						{loginLink}
		      </ul>

        </div>
      </div>
    </nav>
  }
});
