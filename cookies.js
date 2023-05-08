/* 
Name: Frankie E Moncada
Name of file: cookies.js
Date created: 2023-03-27
Date last edited: 2023-05-08
Description: This is assignment four's JS cookies where I incorporate more Javascript into my website.
*/

function setCookie(name, cvalue, expirDays) {
  var day = new Date();
  day.setTime(day.getTime() + (expirDays* 24 * 60 * 60 * 1000));
  var expires = "expires=" + day.toUTCString();
  document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie (name){
  var cookieName = name + "=";
  var cookies = document.cookie.split(';');

  for(var i=0; i < cookies.length; i++){
      var cookie = cookies[i];
      while(cookie.charAt(0) == ' '){

          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) == 0){

          return cookie.substring(cookieName.length, cookie.length);

      }

  }
  return "";
}

var firstName = getCookie("firstName");
if (firstName != ""){

  document.getElementById("helloworld").innerHTML = "Welcome back, " + firstName + "! <br><a href = '#' id = 'new-user'>Not  " + firstName + 
  "? Click here to start as a new user.</a>";

  document.getElementById("new-user").addEventListener("click", function(){
      setCookie("firstName" , "" , -1)
      location.reload();

  });
  }else   {
      document.getElementById("helloworld").innerHMTL = "Welcome, new user!";
      var nameInput = prompt("Welcome, new user! Please enter your first name:");

      if(nameInput != "" && nameInput != null){
          setCookie("firstName" , nameInput, 30);
      }
  }

var firstNameInput = document.getElementById("firstName");
    if (firstName != "") {
      firstNameInput.value = firstName;
    }
    firstNameInput.addEventListener("input", function () {
      setCookie("firstName", firstNameInput.value, 30);
    });