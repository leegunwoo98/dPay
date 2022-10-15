//create a function to check username and password
import {validateUsername, validatePassword} from "./Validation.js"
import {Login} from "../API/Login.js"
const LoginCheck = (username,password, {setUserID,setPageID}) =>{

    console.log(username);
    console.log(password)
    var usernamePrompt= validateUsername(username)
    var passwordPrompt = validatePassword(password)
    var loginSuccessful=false;
    var userID=null
    if (usernamePrompt !== null) {
        alert(usernamePrompt)
        
    }
    else if (passwordPrompt !== null) {
        alert(passwordPrompt)
    }
    else {
        //check database for username and password
        var user = Login(username,password)
        Logged_tf=true
        if(Logged_tf){
            try{
                AsyncStorage.setItem("userName",username)
                AsyncStorage.setItem("password",password)
            }
            catch(error){
                alert(error)
            }
            alert("Login Successful")
            setUserID(userID)
            setPageID("home")
        }
        else{
            //store username and password in local storageKey
            alert("Login Unsuccessful")
        }
        
    }
}

//export function LoginCheck
export {LoginCheck}