function redirect() {
    location.replace("file:///Users/rbates/Documents/SMU/Spring%202019/UI/car_app/AutomotiveApp/FrontEnd/welcome.html")
}

function logout() {
    location.replace("file:///Users/rbates/Documents/SMU/Spring%202019/UI/car_app/AutomotiveApp/FrontEnd/index.html")
}

// function validateEmail(email) {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }
  
// function validate() {
//     var $result = $("#result");
//     var email = $("#email").val();
//     $result.text("");

//     if (validateEmail(email)) {
//         $result.text(email + " is valid :)");
//         $result.css("color", "green");
//     } else {
//         $result.text(email + " is not valid :(");
//         $result.css("color", "red");
//     }
//     return false;
// }
  
//   $("#validate").on("click", validate);