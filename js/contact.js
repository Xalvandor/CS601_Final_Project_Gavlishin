const myForm = document.forms.myForm;
myForm.addEventListener("submit", validateForm);

function validateForm() {

  // references to DOM elements
  // first two are let to allow capitalization of names later on
  let firstName = document.getElementById("firstname");
  let lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const firstNameError = document.getElementById("firstname-error");
  const lastNameError = document.getElementById("lastname-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  //resets error messages
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  // sets initial validity to true, flips to false if a validation is failed below
  let isValid = true;

  // first two if statements check for length and alpha only characters using a helper function
  // false result indicates invalid
  if (!testName(firstName.value.trim())) {
    firstNameError.textContent = "Sorry: Last name must contain two (2) or more alpha characters.";
    isValid = false;
  }

  if (!testName(lastName.value.trim())) {
    lastNameError.textContent = "Sorry: Last name must contain two (2) or more alpha characters.";
    isValid = false;
  }

  // checks for email validity using a helper function, false result indicates invalid
  if (!testEmail(email.value.trim())) {
    emailError.textContent = "Please enter a valid email."
    isValid = false;
  }

  // if the value of options is empty, that indicates no package was chosen.
  if (message.value === "") {
    messageError.textContent = "Please write a message.";
    isValid = false;
  }

  // If it passes all the checks, the success message below is created and displayed.
  if (isValid) {
    firstName = firstName.value.trim().replace(/^./, char => char.toUpperCase());
    lastName = lastName.value.trim().replace(/^./, char => char.toUpperCase());

    document.getElementById('myForm').style.display = 'none';
    document.getElementById('success-message').style.visibility = 'visible';
    const successMessage = document.getElementById('success-message');
    successMessage.innerHTML = `Thank you, ${firstName} ${lastName}, for sending me a message!`;
    successMessage.style.visibility = 'revert';
    successMessage.style.order = "1";

    //scroll back up to the top to see the success message
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return false;
  }
    // The return false above and the return false below are to keep the web form from navigating away
  // I've read that preventDefault is supposed to do that, but I could not get it to work for me.
  else {
    return false;
  }
}

function testName(string) {
  // regex for any character that is not a letter
  const nameRegex = /[^a-zA-Z]+/g;

  // returns true if the name is larger than 1 character and matches the regex
  return string.trim().length > 1 && nameRegex.test(string) === false;

}

function testEmail(string) {
  // regex for email validation
  // allows for alphanumeric characters, and some special characters like  ., _, %, +, and -
  // domain must be at least two alphanumeric characters
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // returns true if the email is larger than 1 character and matches the regex
  return string.trim().length > 1 && emailRegex.test(string) === true;
}
