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
        tFrequency: $("#tFrequency-input").val(),
      });

	 $("#name-input").val("");
	 $("#destination-input").val("");
	 $("#first-input").val("");
	 $("#tFrequency-input").val("");
});

	database.ref().on("child_added", function(snap) {	
	console.log(snap.val());

  console.log(snap.val().name);
  console.log(snap.val().destination);
  console.log(snap.val().firstTimeArrival);
  console.log(snap.val().tFrequency);

var firstTimeConverted = moment(snap.val().firstTimeArrival, "hh:mm").subtract(1, "years");
console.log(firstTimeConverted);
var diffTime = moment().diff(firstTimeConverted, "minutes");

console.log("DIFFERENCE IN TIME: " + diffTime);
var tFrequency = 10;
var firstTime = "12:00";
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

var tMinutesTillTrain = tFrequency - tRemainder;
console.log("Minutes till train: " + tMinutesTillTrain);

var nextTrain = moment().add(tMinutesTillTrain, "minutes");

console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


   $(".table").append("<tr><td>" + snap.val().name + "</td><td>" + snap.val().destination + "</td><td>" + snap.val().firstTimeArrival + "</td><td>" + snap.val().tFrequency + "</td></tr>");

 });


 //      // full list of items to the well
 //      $(".table").append("<tr><td> " + childSnapshot.val().name +
 //        " </td><td> " + childSnapshot.val().destination +
 //        " </td><td> " + childSnapshot.val().firstTimeConverted +
 //        " </td><td> " + childSnapshot.val().tFrequency +
 //      	" </td></tr>");

 // console.log(firstTime)

  