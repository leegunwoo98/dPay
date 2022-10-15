//create a function to check username and password
import { validateUsername, validatePassword, validateEmail } from "../Login/Validation.js";
const RegistrationCheck = (username, password, email, { setPageID, setUserNameGlobal, setPasswordGlobal })  => {
    setUserNameGlobal("");
    setPasswordGlobal("");
    console.log(username);
    console.log(password);
    console.log(email);
    var usernamePrompt = validateUsername(username);
    var passwordPrompt = validatePassword(password);
    var emailPrompt = validateEmail(email);
    if (usernamePrompt !== null) {
        alert(usernamePrompt);
    }
    else if (passwordPrompt !== null) {
        alert(passwordPrompt);
    }
    else if (emailPrompt !== null) {
        alert(emailPrompt);
    }
    else {
        //register in database
        alert("Registration Successful");
        setPageID("login");
    }
}