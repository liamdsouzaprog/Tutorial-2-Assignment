//START OF QUESTION 1: DATA TYPES

// Input: birthYear is a positive integer Number no greater than 2026,or a String containing digits.
function printAgeIn2026(birthYear){ 
    let age; 
    age = 2026 - Number(birthYear); // Calculate the age the person will turn in 2026.

    console.log("This person will turn " + age + " in 2026.") 
    return age; 
} 

// Input: age is a positive integer Number or a String containing digits.
function printAgeIn10Years(age){ 
    let newAge; 
    newAge = Number(age) + 10; // Add 10 to the person's age.

    console.log("This person will be " + newAge + " in 10 years.") 
    return newAge; 
} 

// Input: age is a String or Number representing an integer.
function checkIfAdult(age){ 
    let isAdult; 
    isAdult = Number(age) >= 18; // Check if the person's age is at least 18.

    console.log("The person is " + (isAdult ? "" : "not")  + " adult.") 
    return isAdult; 
} 

// Input: number can be any value; only the Number value 0 should return true.
function checkIfZero(number){ 
    let isZero; 
    isZero = number === 0; // Check if the input is exactly the Number 0.

    console.log("The input is " + (isZero ? "" : "not")  + " 0.") 
    return isZero; 
} 

// Input: string is a non-empty String and number is a Number that is not NaN.
function checkIfEquivalent(string, number){ 
    let isEquivalent; 
    isEquivalent = Number(string) === number; // Convert the string to a Number and compare it to the given number.

    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.") 
    return isEquivalent; 
}

//START OF QUESTION 2: SHORT CIRCUITS

// Input: positive integer Number, null, or undefined.
function unreadAlert(unreadCount){
    unreadCount && // Only continue to the console.log if unreadCount is truthy.
    console.log("You have " + unreadCount + " messages.")
}

// No input restrictions.
function unreadAlertValidated(unreadCount){
    typeof unreadCount === "number" && unreadCount > 0 && // Check that unreadCount is a Number greater than 0 before printing.
    console.log("You have " + unreadCount + " messages.")
}

// Input: String, Number, null, or undefined.
function unreadAlertStringInput(unreadCount){
    unreadCount != null && Number(unreadCount) > 0 && // Check that unreadCount is not null/undefined and represents a number greater than 0.
    console.log("You have " + unreadCount + " messages.")
}

// Input: Number, null, or undefined.
function showScore(score){
    let correctedScore = score ?? "N/A"; // Keep the original score unless it is null or undefined.

    console.log("The score is:" + score)
    return correctedScore;
}

// Input: String (including empty string), or undefined.
function printWelcomeMessage(username){
    let userOrPlaceholder = username || "Mustang"; // Keep the username unless it is empty or undefined.

    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}