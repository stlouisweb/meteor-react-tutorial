TaskForm = React.createClass({
	componentDidMount: function () {
		$('#due-datepicker').datepicker();
		$('#due-datepicker').on("changeDate", function() {
			$('#taskDateHidden').val(
					$('#due-datepicker').datepicker('getFormattedDate')
			);
		});
	},
	handleSubmit(event) {
		event.preventDefault();

		var title = ReactDOM.findDOMNode(this.refs.taskTitle).value;
		 													console.log(title);
		var description = ReactDOM.findDOMNode(this.refs.taskDescription).value;
															console.log(description);
		var date = ReactDOM.findDOMNode(this.refs.taskDate).value;
															console.log(date);
		var assignee = ReactDOM.findDOMNode(this.refs.taskAssignee).value;
															console.log(assignee);
		var reporter = Meteor.user();

		Tasks.insert({
			title: title,
			description: description,
			due: date,
			assignee: assignee,
			reporter: reporter,
			createdAt: new Date() // current time
		});

		// Clear form
		ReactDOM.findDOMNode(this.refs.taskTitle).value = "";

		ReactDOM.findDOMNode(this.refs.taskDescription).value = "";

		ReactDOM.findDOMNode(this.refs.taskDate).value = "";

	  ReactDOM.findDOMNode(this.refs.taskAssignee).value;

		// Find the text field via the React ref
	//	var text = React.findDOMNode(this.refs.textInput).value.trim();
		//
		// Tasks.insert({
		// 	text: text,
		// 	createdAt: new Date() // current time
		// });
		//
		// // Clear form
		// React.findDOMNode(this.refs.textInput).value = "";
	},
	render() {
		return <div>
			<h2>Add Task</h2>
			<form className="form-horizontal">
				<div className="form-group">
					<label for="taskTitle" className="col-sm-3 control-label">Title</label>
					<div className="col-sm-9">
						<input type="text" ref="taskTitle" className="form-control" id="taskTitle" placeholder="Super important thing to do" />
					</div>
				</div>
				<div className="form-group">
					<label for="taskDescription" className="col-sm-3 control-label">Description</label>
					<div className="col-sm-9">
							<textarea id="taskDescription" ref="taskDescription" className="form-control" rows="3"></textarea>
					</div>
				</div>
				<div className="form-group">
					<label for="due-datepicker" className="col-sm-3 control-label">Due Date</label>
					<div className="col-sm-9">
						<div id="due-datepicker"></div>
						<input type="hidden" id="taskDateHidden" ref="taskDate" />
					</div>
				</div>
				<div className="form-group">
					<label for="taskAssignee" className="col-sm-3 control-label">Assignee</label>
					<div className="col-sm-9">
							<select id="taskAssignee" ref="taskAssignee" className="form-control">
								<option>user1</option>
								<option>user2</option>
								<option>user3</option>
								<option>user4</option>
							</select>
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-10 text-center">
						<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add Task</button>
					</div>
				</div>
			</form>
		</div>
	}
});
