HomePage = React.createClass({

  render() {
    return <div className="container-fluid">
							<div className="row">
								<div className="col-xs-5 task-pane">
									<TaskForm />
								</div>
								<div className="col-xs-7">
									<h2>Task List</h2>
									<TaskList />
								</div>
							</div>
    			 </div>

  }
});
