TaskList = React.createClass({
	mixins: [ReactMeteorData],

	// Loads items from the Tasks collection and puts them on this.data.tasks
	getMeteorData() {
		return {
			tasks: Tasks.find({}).fetch()
		}
	},
	renderTasks() {
    // Get tasks from this.data.tasks
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  render() {
    return (
        <ul>
          {this.renderTasks()}
        </ul>
    );
  }
});
