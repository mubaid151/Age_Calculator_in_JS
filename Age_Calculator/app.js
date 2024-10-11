// Prompt the user for input
var birthDay = prompt("Enter your birth day (1-31):");
var birthMonth = prompt("Enter your birth month (Full name, abbreviation, or number):");
var birthYear = prompt("Enter your birth year (e.g., 1990):");
birthMonth = birthMonth.toLowerCase(); 
// Convert the month input to a numeric value
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var birthMonthNumber = null;  // Use null to indicate no month assigned yet

// Check if birthMonth is a numeric month
if (birthMonth >= '1' && birthMonth <= '12') {
    birthMonthNumber = parseInt(birthMonth) - 1;  // If numeric, convert it directly
} else {
    // Check if birthMonth is a full name
    for (var i = 0; i < monthNames.length; i++) {
        if (birthMonth === monthNames[i]) {
            birthMonthNumber = i;
            break;
        }
    }
    // Check if birthMonth is an abbreviation
    if (birthMonthNumber === monthAbbreviations[j]) { // If still not found
        for (var j = 0; j < monthAbbreviations.length; j++) {
            if (birthMonth === monthAbbreviations[j]) {
                birthMonthNumber = j;
                break;
            }
        }
    }
}

// Check if a valid month was entered
if (birthMonthNumber === monthAbbreviations[j]) {
    console.log("Invalid month input");
} else {
    // Get the current date
    var currentDate = new Date();

    // Create a Date object for the birth date
    var birthDate = new Date(birthYear, birthMonthNumber, birthDay);

    // Calculate the age
    var ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    var ageMonths = currentDate.getMonth() - birthDate.getMonth();
    var ageDays = currentDate.getDate() - birthDate.getDate();

    // Adjust if the month or day is negative
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        ageMonths--;
        var lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }

    // Display the result
    console.log("Your age is " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days!");
}
