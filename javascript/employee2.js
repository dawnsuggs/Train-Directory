 var config = {
    apiKey: "AIzaSyB1cZw2vqzbhYaF4ljVYFizfXEdJEAhJNs",
    authDomain: "practice-database-cbd56.firebaseapp.com",
    databaseURL: "https://practice-database-cbd56.firebaseio.com",
    projectId: "practice-database-cbd56",
    storageBucket: "practice-database-cbd56.appspot.com",
    messagingSenderId: "826826634781"
  };

firebase.initializeApp(config);


// Create a variable to reference the database.
var database = firebase.database();

$("#add-train").on("click", function(event) {
	 event.preventDefault();
	 
	 database.ref().push({
        name: $("#name-input").val(),
        destination: $("#destination-input").val(),
        firstTimeArrival: $("#first-input").val(),
        frequency: $("#frequency-input").val(),
      });

	 $("#name-input").val("");
	 $("#destination-input").val("");
	 $("#first-input").val("");
	 $("#frequency-input").val("");
});

	database.ref().on("child_added", function(childSnapshot) {

	
	//var now = new Date().getTime();
	//var then2 = new Date(childSnapshot.val().date).getTime(); 
	//var numMil = now - then2; 
	//var months = Math.round(numMil/1000/60/60/24/30.42);
	//var billed = months * (childSnapshot.val().rate);
	//console.log(months);
	//console.log(billed);

      // Log everything that's coming out of snapshot
      //console.log(childSnapshot.val().name);
      //console.log(childSnapshot.val().role);
      //console.log(childSnapshot.val().date);
      //console.log(childSnapshot.val().rate);

      var a = moment();
      var b = moment(childSnapshot.val().date, "YYYY/MM/DD");
      console.log(b); 
      var c = a.diff(b, "months");
      console.log(c);
      var firstTime = moment().format("HH:mm");
      var frequency = 12;


      // full list of items to the well
      $(".table").append("<tr><td> " + childSnapshot.val().name +
        " </td><td> " + childSnapshot.val().destination +
        " </td><td> " + c+
        " </td><td> " + childSnapshot.val().frequency +
      	" </td></tr>");

 console.log(firstTime)

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
