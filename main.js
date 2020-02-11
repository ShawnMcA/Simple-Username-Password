// ==============================================
//
//    Program to test a username/password login 
//
// ==============================================

"use strict";

// Prompt for the username 
function getUsername() {
    return prompt("Please enter your username");
}

// Prompt for the password
function getPassword() {
    return prompt("Please enter your password");
}

// Validates the users username entry. Would require a more intricate username database. 
function checkUsername(userEntry) {
    const login = "Admin";

    switch (userEntry) {
        case login:
            return true;
        case "":
            alert("Sorry, that is an invalid entry...");
            return false;
        default:
            alert("Incorrect username... Please try again");
            return false;
    }
}

// Validates the users password entry. Would require a far more intricate password database with proper security measures. 
function checkPassword(userEntry) {
    const password = "TheMaster";

    switch (userEntry) {
        case password:
            alert("Welcome!");
            return true;
        case "":
            alert("Sorry, that is an invalid entry...");
            return false;
        default:
            alert("Incorrect password... Please try again");
            return false;
    }
}

// Main function 
(function main() {
    let isValidUsername = false;
    let isValidPassword = false;

    do {
        isValidUsername = checkUsername(getUsername());
    } while(!isValidUsername);

    do {
        isValidPassword = checkPassword(getPassword());
    } while(!isValidPassword);
 
})();