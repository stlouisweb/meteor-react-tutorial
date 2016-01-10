TaskForm = React.createClass({
	render() {
		return <div>
			<h2>Add Task</h2>
			<form className="form-horizontal">
				<div className="form-group">
					<label for="inputTitle" className="col-sm-3 control-label">Title</label>
					<div className="col-sm-9">
						<input type="text" className="form-control" id="inputTitle" placeholder="Super important thing to do" />
					</div>
				</div>
				<div className="form-group">
					<label for="inputDescription" className="col-sm-3 control-label">Description</label>
					<div className="col-sm-9">
							<textarea className="form-control" rows="3"></textarea>
					</div>
				</div>
				<div className="form-group">
					<label for="inputDescription" className="col-sm-3 control-label">Due Date</label>
					<div className="col-sm-9">
						<div id="due-datepicker"></div>
					</div>
				</div>
				<div className="form-group">
					<label for="inputAssignee" className="col-sm-3 control-label">Assignee</label>
					<div className="col-sm-9">
							<select className="form-control">
								<option>user1</option>
								<option>user2</option>
								<option>user3</option>
								<option>user4</option>
							</select>
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-10 text-center">
						<button type="submit" className="btn btn-primary">Add Task</button>
					</div>
				</div>
			</form>
		</div>
	}
});
