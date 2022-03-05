'use strict';


var errorCount = 0
var errorData = {}

function getAkanName(){

    //getting inputs for the form
    var firstName =document.getElementById("inputFirstName").value;
    var lastName =document.getElementById("inputLastName").value;
    var birthDate = document.getElementById("birthDate").value;
    var userGender = document.getElementById("CustomSelectGender");

    //required arrays for the days and Akan Names
    var femNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    //buttons to be used in the form
    var submitbtn = document.getElementById("submitbtn");
    var refreshbtn = document.getElementById("refreshbtn")

    //inbuilt functions to get the day and day of the week born
    var bornDay = new Date (birthDate);
    var dayOfWeek = bornDay.getDay();

    //getting display objects for errors
    var firstNameError = document.getElementById("firstNameError"); //atleast one name is required.
    var birthDateError = document.getElementById("birthDateError");
    var userGenderError = document.getElementById("userGenderError");

    //final display after submit
    var AkanNameResult = document.getElementById("AkanNameResult")
    var valid = false;

    //button event
    submitbtn.onclick = (event) => {
        event.preventDefault();
    }

    //conditions for the required output
    if (birthDate===""){
        birthDateError.innerHTML = "Please enter a valid date of birth ";
        return false;
    }
    else {
        for (var i=0;i<userGender.length;i++){
            if (userGender[i].checked) {
                valid = true
            break;
            }
        }
        if (valid){
            if (userGender[i].value === "Male"){
                AkanNameResult.innerHTML = "Hello! "+firstName+ +lastName+  "You were born on, "+days[dayOfWeek]+ "Your Akan Name is: " +maleNames[dayOfWeek];
             }
            else {
            if(userGender[i].value === "Female"){
                AkanNameResult.innerHTML = "Hello! "+firstName+ +lastName+  "You were born on, "+days[dayOfWeek]+ "Your Akan Name is: " +femNames[dayOfWeek];
            }
            }
        }    
            else {
                userGenderError.innerHTML = "Please choose your gender";
                return false;
            }       
        
    } 
}

//for the user to reset or refresh the form
function refreshForm(){
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("birthDateError").innerHTML= "";
    document.getElementById("userGenderError").innerHTML= "";
    document.getElementById("AkanNameResult").innerHTML= "";

}


//     // var firstName =document.getElementById("inputFirstName");
//     // var lastName =document.getElementById("inputLastName");
//     // var birthdate = document.getElementById("birthdate");


//     // function printResult(event) {
//     // event.preventDefault()
//     // console.log(dataForm.elements["firstname"].value)

//     if(!firstName.value){
//         errorData.firstName = `<p>First name is required </p>`
//         errorCount = errorCount +1
//     }
//     else if(!lastName.value){
//         errorData.lastName = `<p> Last name is required </p>`
//         errorCount = errorCount +1
//     }
//     else if(!birthdate.value){
//         errorData.birthdate = `<p>Birth date is required </p>`
//         errorCount = errorCount +1
//     }
//     else if (!myGender.checked){
//         errorData.birthdate = `<p>Birth date is required </p>`
//         errorCount = errorCount +1
//     }
//         else {
//            if (myGender.checked) {
//                 if (myGender.value === "Male"){
//                    let AkanName = document.getElementById("alertMessage").innerHTML =  "Hello!: "+firstName+ +lastName+ "You were born on,: "+dayOfWeek+ "Your Akan Name is: " +maleNames[dayOfWeek]
//                     console.log(AkanName)
//                 }
//                 else {
//                     let AkanName = document.getElementById("alertMessage").innerHTML =  "Hello!: "+firstName+ +lastName+ "You were born on,: "+dayOfWeek+ "Your Akan Name is: " +femNames[dayOfWeek]
//                     console.log(AkanName)
//                 }
                
//            }    
//             else {
//                 document.getElementById("alertMessage") = "Oops! You need to select your gender to continue."
//             }
//         } 
//     }

//     const sbtn = document.getElementById("submitbtn")
//         sbtn.addEventListener("click",getAkanName())
//         console.log(sbtn)


// //     console.log( birthdate.value)
// //     errors.innerHTML = `${errorData.firstName} ${errorData.lastName} ${errorData.birthdate}`
// //     console.log(errorCount,errorData)


// // // const sbtn = document.getElementById("submitbtn")
// // // console.log(sbtn)
// // // sbtn.addEventListener("click",printResult)



// // // submitbtn.addEventListener('click'() => {
// // //     document.getElementById(message).innerHTML
// // // }

// // // var message = "Hello!: "+firstName+ +lastName+
// //     // "</br> You were born in: "+dayOfWeek+
// //     // "</br>Your Akan name is: " +AkanName+
// //     // document.getElementById('placeholder').innerHTML == message;

// //     // const birthDate = birthdate.value.split("-")
// //         // console.log(birthDate,birthDate[0], birthDate[1], birthDate[2]}