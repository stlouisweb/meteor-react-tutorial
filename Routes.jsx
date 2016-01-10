FlowRouter.route("/", {
  action: function() {
		ReactLayout.render(MainLayout, {
		  content: <HomePage />
		})
  }
});
FlowRouter.route("/login", {
	action: function() {
		ReactLayout.render(MainLayout, {
			content: <Login />
		})
	}
});
