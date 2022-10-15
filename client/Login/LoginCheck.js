//create a function to check username and password
import {validateUsername, validatePassword} from "./Validation.js"
const LoginCheck = (username,password, {setUserID,setPageID}) =>{

    console.log(username);
    console.log(password)
    var usernamePrompt= validateUsername(username)
    var passwordPrompt = validatePassword(password)
    var userID=null
    if (usernamePrompt !== null) {
        alert(usernamePrompt)
        
    }
    else if (passwordPrompt !== null) {
        alert(passwordPrompt)
    }
    else {
        //check database for username and password
        
        alert("Login Successful")
        setPageID("home")
        setUserID(userID);
        
    }
}

//export function LoginCheck
export {LoginCheck}