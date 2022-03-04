// Declaring inputs for the user
var firstName =document.getElementById(inputFirstName);
var lastName =document.getElementById(inputLastName);
var date = document.getElementById(inputDate);
var month = document.getElementById(inputMonth);
var year = document.getElementById(inputYear);
var submitbtn = document.getElementById(submitbtn);

var date = new date (document.getElementById(inputDate).value)
var dayOfWeek = date.getDay()
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var femNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


function printResult() {
    var message = "Hello!: "+firstName+ +lastName+
    "</br> You were born in: "+dayOfWeek+
    "</br>Your Akan name is: " +AkanName+
    document.getElementById('placeholder').innerHTML == message;
};


// submitbtn.addEventListener('click'() => {
//     document.getElementById(message).innerHTML
// }