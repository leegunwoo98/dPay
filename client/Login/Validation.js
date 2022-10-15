
//create a group of functions that can be used to validate the user input
// Path: client/Validation.js
import react from "react"
//create a function that can be used to validate the username
export const validateUsername = (username) => {
    //check if the username is empty
    if (username.length === 0) {
        return "Username cannot be empty"
    }
    //check if the username is less than 5 characters
    if (username.length < 5) {
        return "Username must be at least 5 characters"
    }
    //check if the username is more than 20 characters
    if (username.length > 20) {
        return "Username cannot be more than 20 characters"
    }
    //check if the username contains any special characters
    if (username.match(/^[a-zA-Z0-9]+$/)) {
        return "Username cannot contain special characters"
    }
    //return null if the username is valid
    return null
}
//create a function that can be used to validate the password
export const validatePassword = (password) => {
    //check if the password is empty
    if (password.length === 0) {
        return "Password cannot be empty"
    }
    //check if the password is less than 5 characters
    if (password.length < 5) {
        return "Password must be at least 5 characters"
    }
    //check if the password is more than 20 characters
    if (password.length > 20) {
        return "Password cannot be more than 20 characters"
    }
    //check if the password contains any special characters
    if (password.match(/^[a-zA-Z0-9]+$/)) {
        return "Password cannot contain special characters"
    }
    //return null if the password is valid
    return null
}
