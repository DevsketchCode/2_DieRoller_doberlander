function RollDice() {
  // Initialize variables
  var strFirstName = "";
  var strDieWord = "dice";
  var strOutputString = "";
  var intNumberDie = 0;
  var intGeneratedNumber = 0;
  var intSumOfDice = 0;

  // prompt the user for their name
  do {
    strFirstName = prompt("Please enter your first name: ", "");
    // validate the first name has been entered
    if (strFirstName == "") {
      alert("Your name cannot be blank.");
    }
  } while (strFirstName == "");

  // prompt the user for how many dice they want to roll and validate the response
  do {
    intNumberDie = Number(prompt("How many dice would you like to roll?", "0"));

    // Validate entry, make sure is number, is 0 or higher, and is an Integer
    if (isNaN(intNumberDie) || intNumberDie < 0 || (parseFloat(intNumberDie) != parseInt(intNumberDie))) {
      alert("Please enter a positive integer number.");
    } else if (intNumberDie > 10) {
      // Alert to notify of a cap on how many dice they can use
      alert("Sorry we only have 10 dice.");

    } else if (intNumberDie == 1) {
      // adjust the dice word to die singular
      strDieWord = "die";

    }
  } while (isNaN(intNumberDie) || intNumberDie < 0 || (parseFloat(intNumberDie) != parseInt(intNumberDie)) || intNumberDie > 10);

  // Output the initial user input information
  strOutputString += "<p>" + strFirstName + "\'s rolling " + intNumberDie + " " + strDieWord + "...</p>";

  if (intNumberDie > 0) {

    // Set intro to the users roll
    strOutputString += "<p>Hey " + strFirstName + ", you rolled a ";

    // Loop through each of the dice
    for (var i = 1; i <= intNumberDie; i++) {

      // Set a random number from 1 to 6 for each die
      intGeneratedNumber = Math.floor(Math.random() * 6) + 1;

      // Show the roll result for this die
      alert("Die #" + i + " is a " + intGeneratedNumber);

      // Adjust the string if there is only 1 die, or is the last die of the roll
      if (i != intNumberDie || intNumberDie == 1) {
        if (intNumberDie <= 2) {
          strOutputString += intGeneratedNumber + " ";
        } else {
          strOutputString += intGeneratedNumber + ", ";
        }

      } else {
        // prepare the string for the next die result
        strOutputString += "and " + intGeneratedNumber;
      }

      // Sum up each die in this loop
      intSumOfDice = intSumOfDice + intGeneratedNumber;
    }

    // Include the grand total of all the dice and the Hope you had fun message
    strOutputString += " for a grand total of " + intSumOfDice + ".</p>" + 
                    "<h3>Hope you had fun rolling the dice!</h3>";

  } else {
    //Set output string showing they did not roll any dice.
    strOutputString += "<p>Hey " + strFirstName + ", you forgot the dice again. " + "Your grand total is " + intSumOfDice + ".</p>";
  }

  // Display the message on the website
  document.getElementById("content").innerHTML += strOutputString;
}