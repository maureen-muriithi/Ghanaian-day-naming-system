
var submitButton = document.getElementById("submitbtn");
submitButton.addEventListener('click', getAkanName);

var refreshButton = document.getElementById("refreshbtn");
refreshButton.addEventListener('click', refreshForm)

function getAkanName(){

    //getting inputs for the form
    var firstName =document.getElementById("inputFirstName").value;
    var lastName =document.getElementById("inputLastName").value;
    var birthDate = document.getElementById("birthDate").value;
    var userGender = document.getElementById("CustomSelectGender").value;

    //required arrays for the days and Akan Names
    var femNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    //final display after submit
    var akanNameResult = document.getElementById("akanNameResult");


    //conditions for the required output
    if(!firstName) {
        //  An alert incase the user does not input a name
        // //atleast one name is required.
        alert("First Name is required");
        return;
    }
    
    if (!birthDate){
        //  An alert incase the user does not choose a birth date
        alert("A valid date of birth is required");
        return;
    }
   
    if(!userGender){
        // An alert incase the user does not choose a gender
        alert("Gender is required");
        return;
    } 

    // How to get the value for the days, day of the week, and the Akan names for the particular days
    var bornDay = new Date (birthDate);
    var dayOfWeek = bornDay.getDay();


    if(userGender === 'Male') {
        akanNameResult.innerHTML = `Hello, ${firstName} ${lastName || ''}! </br> You were born on: ${days[dayOfWeek]}. </br> Your Akan Name is:  ${maleNames[dayOfWeek]}!`;
    } else {
        akanNameResult.innerHTML = `Hello, ${firstName} ${lastName || ''}! </br> You were born on: ${days[dayOfWeek]}. </br> Your Akan Name is:  ${femNames[dayOfWeek]}!`;
    }
}

//for the user to reset or refresh the form
function refreshForm(){
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("birthDateError").innerHTML= "";
    document.getElementById("userGenderError").innerHTML= "";
    document.getElementById("akanNameResult").innerHTML= "";
}
