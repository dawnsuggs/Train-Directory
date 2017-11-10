<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
 	<script src="https://www.gstatic.com/firebasejs/3.7.1/firebase.js"></script>
 	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.1/moment.min.js"></script>
	<style>
	.jumbotron {
		text-align: center;
		background-color: black;
		color: white;
	}
	.panel-default>.panel-heading,
	.btn {
		background-color: #4cb4e8;
		color: white;
	}
	</style>

</head>
<body>

<div class="container">
	<div class="jumbotron">
  		<h1>Employee Data Management</h1>
  		<p>A Comprehensive Directory of Employee Billable Hours</p>
	</div>

	<div class="row">
		<div class="col-sm-12">
			<div class="panel panel-default">
				<div class="panel-heading">Current Employee</div>

				<table class="table">
					<tr>
						<th>Employee Name</th>
						<th>Role</th>
						<th>Start Date</th>
						<th>Months Worked</th>
						<th>Monthly Rate ($)</th>
						<th>Total Billed ($)</th>
					</tr>
					<tr>
					</tr>
				</table>
				</div>
			</div>
		</div>

	<div class="row">
		<div class="col-sm-12">
			<div class="panel panel-default">
				<div class="panel-heading">Add Employee</div>
					<div class="panel-body">
					<form role="form">
			         	<div class="form-group">
			                <label for="name-input">Employee Name:</label>
			                <input class="form-control" id="name-input" type="text">
			              </div>
			              <div class="form-group">
			                <label for="role-input">Role</label>
			                <input class="form-control" id="role-input" type="text">
			              </div>
			              <div class="form-group">
			                <label for="date-input">Start Date</label>
			                <input class="form-control" id="date-input" type="date">
			              </div>
			              <div class="form-group">
			                <label for="rate-input">Monthly Rate</label>
			                <input class="form-control" id="rate-input" type="number">
			              </div>
			              
			              <button class="btn btn-default" id="add-employee" type="submit">Submit</button>
			           </form>
			           </div>
				</div>
			</div>
		</div>

	</div>
</div>
<script src="employee.js"></script>
</body>


</html>