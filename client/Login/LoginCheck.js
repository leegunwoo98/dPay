//create a function to check username and password
import {validateUsername, validatePassword} from "./Validation.js"
function LoginCheck(username, password, setUserID) {
    var usernamePrompt= validateUsername(username)
    var passwordPrompt = validatePassword(password)
    const userId = null
    if (usernamePrompt !== null) {
        alert(usernamePrompt)
        
    }
    else if (validatePassword !== null) {
        alert(passwordPrompt)
    }
    else {
        //Need to implement login
        
        alert("Login Successful")

        setUserID(userID);
    }
}

//export function LoginCheck
export {LoginCheck}