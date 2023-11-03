// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt the user for password criteria
function promptForPasswordCriteria() {
  var passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }

  return { passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial };
}

// Generate a password based on the selected criteria
function generatePassword() {
  var criteria = promptForPasswordCriteria();

  if (!criteria) {
    return; // Exit if criteria are not selected
  }

  // Define character sets based on criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  var allChars = "";
  if (criteria.includeLowercase) {
    allChars += lowercaseChars;
  }
  if (criteria.includeUppercase) {
    allChars += uppercaseChars;
  }
  if (criteria.includeNumeric) {
    allChars += numericChars;
  }
  if (criteria.includeSpecial) {
    allChars += specialChars;
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < criteria.passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
