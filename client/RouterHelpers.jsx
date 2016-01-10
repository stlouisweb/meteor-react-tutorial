let pathFor = ( path, params ) => {
  let query = params && params.query ? FlowRouter._qs.parse( params.query ) : {};
  return FlowRouter.path( path, params, query );
};

let urlFor = ( path, params ) => {
  return Meteor.absoluteUrl( pathFor( path, params ) );
};

let currentRoute = ( route ) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
};

Router = {
  pathFor: pathFor,
  urlFor: urlFor,
  currentRoute: currentRoute
};

let loggedIn = () => {
	if (Meteor.user()) {
		return true
	}
	return null
};

let logOut = () => {
	Meteor.logout();
}

AppUser = {
	loggedIn: loggedIn,
	logOut: logOut
};
