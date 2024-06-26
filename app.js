var inputDisplay = document.getElementById("inputDisplay"); // Display input
var clipBoard = document.querySelector("#clipBoard"); // Weak Password Div
var copyInput = document.querySelector(".copy"); // Copy input
var copiedInput = document.querySelector(".copied"); // Copied input
var generatePassBtn = document.querySelector("#btn"); // Password Generator Button

// Demo Driver-JS
var demo = document.getElementById("demo");


// Getting & Showing Input Range
var rangeBar = document.querySelector("#rangeBar"); // Range Bar
var showRangebarValue = document.querySelector("#rangeDisplay"); // Show Range Bar Values
rangeBar.addEventListener("change", () => {
  if (rangeBar.value < 10) {
    // If count lessthen 10 the added a zero in numbers
    showRangebarValue.innerHTML = 0 + rangeBar.value;
  } else {
    showRangebarValue.innerHTML = rangeBar.value;
  }
});

// Copy ClipBoard
var empty = document.querySelector(".empty").style;
var emptyCheckBox = document.querySelector(".emptyCheckBox").style;
clipBoard.addEventListener("click", () => {
  if (inputDisplay.value == "") {
    empty.display = "block";
    weakPass.style.display = "none";
    strongPass.style.display = "none";
  } else {
    empty.display = "none";
    inputDisplay.select();
    copiedInput.style.display = "block";
    copyInput.style.display = "none";
  }
});

var strongPass = document.querySelector(".strongPass"); // Strong Password Div
var weakPass = document.querySelector(".weakPass"); // Weak Password Div
// Password generation
function generatePass() {
  empty.display = "none";
  copiedInput.style.display = "none";
  copyInput.style.display = "block";

  var capitalLetters = document.querySelector("#capitalLetters"); // Capital Letters Check Box
  var smallLetters = document.querySelector("#smallLetters"); // Small Letters Check Box
  var numbers = document.querySelector("#numbers"); // Numbers Check Box
  var specialCharacterCheckbox = document.querySelector("#specialCharacters"); // Special Characters Check Box
  // Inside password characters
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%^&*(/)_<=]{,+}[|;.>:'?-";
  var number0To9 = "0123456789";

  // Checking If Check Box Checked
  function getCheckedValues(checkboxes) {
    var checkedValue = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedValue.push(checkboxes[i].value);
      }
    }
    return checkedValue;
  }
  var capitalLettersChecked = getCheckedValues([capitalLetters]);
  var smallLettersChecked = getCheckedValues([smallLetters]);
  var numbersChecked = getCheckedValues([numbers]);
  var specialCharactersChecked = getCheckedValues([specialCharacterCheckbox]);

  var pass = []; // array for random number

  // If checkbox checked the push there value in the above array
  if (capitalLettersChecked.length > 0) {
    pass.push(...uppercaseLetters);
  }
  if (smallLettersChecked.length > 0) {
    pass.push(...lowercaseLetters);
  }
  if (numbersChecked.length > 0) {
    pass.push(...number0To9);
  }
  if (specialCharactersChecked.length > 0) {
    pass.push(...specialCharacters);
  }
  var generatePassword = "";
  // Loop for generating password
  for (var i = 0; i < rangeBar.value; i++) {
    var getPass = pass[Math.floor(Math.random() * pass.length)];
    generatePassword += getPass;
    if (generatePassword === "undefined") {
      generatePassword = "";
      break;
    }
  }
  // Generated password validation
  if (
    generatePassword.length >= 8 &&
    capitalLettersChecked.length > 0 &&
    smallLettersChecked.length > 0 &&
    numbersChecked.length > 0 &&
    specialCharactersChecked.length > 0
  ) {

  }
  // Display password
  inputDisplay.value = generatePassword;
}