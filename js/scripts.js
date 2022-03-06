// 'use strict';

const submitButton = document.getElementById("submitbtn");
submitButton.addEventListener('click', getAkanName);

const refreshButton = document.getElementById("refreshbtn");
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

    //getting display objects for errors
    var firstNameError = document.getElementById("firstNameError"); //atleast one name is required.
    var birthDateError = document.getElementById("birthDateError");
    var userGenderError = document.getElementById("userGenderError");

    //final display after submit
    var akanNameResult = document.getElementById("akanNameResult");

    //conditions for the required output
    if(!firstName) {
        // firstNameError.innerHTML = "First Name is required";
        alert("First Name is required");
        return;
    }
    
    if (!birthDate){
        // birthDateError.innerHTML = "A valid date of birth is required ";
        alert("A valid date of birth is required");
        return;
    }
   
    if(!userGender){
        // userGenderError.innerHTML = "Gender is required"
        alert("Gender is required");
        return;
    } 

    var bornDay = new Date (birthDate);
    var dayOfWeek = bornDay.getDay();
    console.log("bornDay", bornDay.getDay())


    if(userGender === 'Male') {
        akanNameResult.innerHTML = `Hello! ${firstName} ${lastName || ''} </br> You were born on, ${days[dayOfWeek]} Your Akan Name is:  ${maleNames[dayOfWeek]}`;
    } else {
        akanNameResult.innerHTML = `Hello! ${firstName} ${lastName || ''} </br> You were born on, ${days[dayOfWeek]} Your Akan Name is:  ${femNames[dayOfWeek]}`;
    }
}

//for the user to reset or refresh the form
function refreshForm(){
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("birthDateError").innerHTML= "";
    document.getElementById("userGenderError").innerHTML= "";
    document.getElementById("akanNameResult").innerHTML= "";
}

//To remove event listners
function removeListeners() {
    submitButton.removeEventListener('click', getAkanName)
    refreshButton.removeEventListener('click', refreshForm) 
}

window.addEventListener('unload',removeListeners)
