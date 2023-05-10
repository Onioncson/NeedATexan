/* 
Name: Frankie E Moncada
Name of file: homework4.js
Date created: 2023-03-27
Date last edited: 2023-05-09
Description: This is assignment four's JS where I incorporate more Javascript into my website.
*/

var dateStuff = new Date().toLocaleString();

document.getElementById("datestuff").innerHTML = dateStuff;

function firstNameValidation() {
  firstName = document.getElementById("firstName").value;
  var namePattern = /^[A-Za-z'-]+$/;

  if (firstName == "") {
    document.getElementById("firstNameAlert").innerHTML = "Must not be empty.";
    return false;
  } else if (firstName != "") {
    if (!firstName.match(namePattern)) {
      document.getElementById("firstNameAlert").innerHTML =
        "Letters, apostrophes, and dashes only.";
      return false;
    } else if (firstName.length < 1) {
      document.getElementById("firstNameAlert").innerHTML =
        "Must contain at least 1 character.";
      return false;
    } else if (firstName.length > 30) {
      document.getElementById("firstNameAlert").innerHTML =
        "Must be less than 30 characters.";
      return false;
    } else {
      document.getElementById("firstNameAlert").innerHTML = "";
      return true;
    }
  }
}

function mNameValidation() {
  const middleinitialAlert = document.getElementById("middleinitial").value.trim();
  const namePattern2 = /^[A-Z]{0,1}$/;

  if (!namePattern2.test(middleinitialAlert)) {
    document.getElementById("middleinitialAlert").innerHTML =
      "Middle initial must be a single capital letter.";
    return false;
  } else {
    document.getElementById("middleinitialAlert").innerHTML = "";
    return true;
  }
}

function lastNameValidation() {
  lastName = document.getElementById("lastName").value;
  var namePattern = /^[A-Za-z'-]+$/;

  if (lastName == "") {
    document.getElementById("lastNameAlert").innerHTML = "Must not be empty.";
    return false;
  } else if (lastName != "") {
    if (!lastName.match(namePattern)) {
      document.getElementById("lastNameAlert").innerHTML =
        "Letters, apostrophes, and dashes only.";
      return false;
    } else if (lastName.length < 1) {
      document.getElementById("lastNameAlert").innerHTML =
        "Must contain at least 1 character.";
      return false;
    } else if (lastName.length > 30) {
      document.getElementById("lastNameAlert").innerHTML =
        "Must be less than 30 characters.";
      return false;
    } else {
      document.getElementById("lastNameAlert").innerHTML = "";
      return true;
    }
  }
}

var fileTypeSelect = document.getElementById("suffix");
var selectedFileType = fileTypeSelect.value;

function dobValidation() {
  var dateInput = document.getElementById("dob");
  date = new Date(dateInput.value);
  var maxAge = new Date().setFullYear(new Date().getFullYear() - 120);
  var alert = document.getElementById("dobAlert");

  if (date > new Date() || date < new Date(maxAge)) {
    alert.innerHTML = "Cannot be in the future or more than 120 years ago.";
    dateInput.value = "";
    return false;
  } else {
    alert.innerHTML = "";
    return true;
  }
}

function ssnValidation() {
  const ssnInput = document.getElementById("ssn");
  let ssn = ssnInput.value;
  if (ssn.trim() === "") {
    document.getElementById("ssnAlert").innerHTML = "Must not be empty.";
    return false;
  }
  const cleaned = ssn.replace(/\D/g, "");
  const socialPattern = /^\d{9}$/;
  if (!socialPattern.test(cleaned)) {
    document.getElementById("ssnAlert").innerHTML =
      "Must only contain numbers and be 9 digits.";
    return false;
  }
  const formattedSocial =
    cleaned.substring(0, 3) +
    "-" +
    cleaned.substring(3, 5) +
    "-" +
    cleaned.substring(5);
  ssnInput.value = formattedSocial;
  document.getElementById("ssnAlert").innerHTML = "";
  return true;
}

function zipValidation() {
  const zipInput = document.getElementById("zipcode").value;
  const zipRegex = /^\d{5}(-\d{4})?$/;
  
  return zipRegex.test(zipInput);
}
const zipInput = document.getElementById("zipcode");
const zipAlert = document.getElementById("zipAlert");

zipInput.addEventListener("input", () => {
  let zipValue = zipInput.value.trim();
  const isValidZip = zipValidation(zipValue);
  if (isValidZip) {
    // truncate zip code to first 5 digits
    zipValue = zipValue.slice(0, 5);
    zipInput.value = zipValue;

    zipInput.setCustomValidity("");
    zipAlert.innerHTML = "";
  } else {
    zipInput.setCustomValidity(
      "Must enter a valid zip code (5 digits i.e. 12345)."
    );
    zipAlert.innerHTML =
      "Must enter a valid zip code (5 digits i.e. 12345).";
  }
});

function emailValidation() {
  email = document.getElementById("email").value;
  var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email == "") {
    document.getElementById("emailAlert").innerHTML = "Must not be empty.";
    return false;
  } else if (!email.match(emailpattern)) {
    document.getElementById("emailAlert").innerHTML =
      "Email address must be valid.";
    return false;
  } else {
    document.getElementById("emailAlert").innerHTML = "";
    return true;
  }
}

function phoneValidation() {
  const phoneNumberInput = document.getElementById("phonenumber");
  let phone = phoneNumberInput.value;
  const cleaned = ("" + phone).replace(/\D/g, "");
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(cleaned)) {
    document.getElementById("phoneAlert").innerHTML =
      "Must be a valid phone number (XXX) XXX-XXXX";
    return false;
  }
  const formattedPhone =
    "(" +
    cleaned.substring(0, 3) +
    ") " +
    cleaned.substring(3, 6) +
    "-" +
    cleaned.substring(6);
  phoneNumberInput.value = formattedPhone;
  document.getElementById("phoneAlert").innerHTML = "";
  return true;
}

function userValidation() {
  var input = document.getElementById("userID");
  input.value = input.value.toLowerCase();

  var user = input.value;
  var userPattern = /^[^0-9]/;
  var unamePattern = /^\S+[A-Za-z_-][A-Za-z0-9_-]+$/;
  var alert = document.getElementById("userAlert");

  if (user == "") {
    alert.innerHTML = "Must not be empty.";
    return false;
  } else if (!user.match(userPattern)) {
    alert.innerHTML = "UserID must not start with a number.";
    return false;
  } else if (!user.match(unamePattern)) {
    alert.innerHTML = "UserID must not include spaces or special characters.";
    return false;
  } else if (user.length < 5) {
    alert.innerHTML = "UserID must be at least 5 characters.";
    return false;
  } else if (user.length > 20) {
    alert.innerHTML = "UserID must not exceed 20 characters.";
    return false;
  } else {
    alert.innerHTML = "";
    return true;
  }
}

function passwordValidation() {
  var userpassword = document.getElementById("userpassword").value;
  var userID = document.getElementById("userID").value;
  var userpasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
  var alert = document.getElementById("password-alert");

  if (userpassword == "") {
    alert.innerHTML = "Must not be empty.";
    return false;
  } else if (userpassword == userID) {
    alert.innerHTML = "Password must not match UserID.";
    return false;
  } else if (userpassword != "") {
    if (!userpassword.match(userpasswordPattern)) {
      alert.innerHTML =
        "Password must contain 1 uppercase, 1 lowercase, 1 special character, and 1 digit.";
      return false;
    } else if (userpassword.length < 8) {
      alert.innerHTML = "Password must be at least 8 characters.";
      return false;
    } else if (userpassword.length > 30) {
      alert.innerHTML = "Password must not exceed 30 characters.";
      return false;
    } else {
      alert.innerHTML = "";
      return true;
    }
  }
}

function password2Validation() {
  pwd1 = document.getElementById("userpassword").value;
  pwd2 = document.getElementById("userpwconfirm").value;

  if (!pwd2) {
    document.getElementById("password-alert2").innerHTML =
      "Please confirm your password.";
    return false;
  }

  if (pwd2 !== pwd1) {
    document.getElementById("password-alert2").innerHTML =
      "Confirm Password does not match password.";
    return false;
  } else if (pwd2 == pwd1) {
    document.getElementById("password-alert2").innerHTML = "";
    return true;
  }
}

date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
//document.getElementById("current_date").innerHTML = month + "/" + day + "/" + year;

function sliderValidation(x) {
  document.getElementById("D-value").innerHTML = x;
}

function getData() {
  var form = document.getElementById("Review");

  var outputTableBody = document.getElementById("outputTableBody");

  var row, dataNameCell, valueCell;
  outputTableBody.innerHTML = "";

  for (var i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value !== "") {
      row = document.createElement("tr");

      dataNameCell = document.createElement("td");

      valueCell = document.createElement("td");

      dataNameCell.textContent = form.elements[i].name;

      if (form.elements[i].type === "checkbox") {
        valueCell.textContent = form.elements[i].checked
          ? "checked"
          : "unchecked";
      } else if (form.elements[i].type === "radio") {
        if (form.elements[i].checked) {
          valueCell.textContent = form.elements[i].value;
        }
      } else {
        valueCell.textContent = form.elements[i].value;
      }

      row.appendChild(dataNameCell);

      row.appendChild(valueCell);

      outputTableBody.appendChild(row);
    }
  }
}

const validations = [
  firstNameValidation,
  mNameValidation,
  lastNameValidation,
  dobValidation,
  ssnValidation,
  zipValidation,
  emailValidation,
  phoneValidation,
  userValidation,
  passwordValidation,
  password2Validation,
];
function checkValidations() {
  for (let func of validations) {
    console.log(func(), func.name)

    if (!func()) {
      document.getElementById("subalert").innerHTML =
        "Please fix your fields and re-submit.";
      return false;
    }
  }
  return true;
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
