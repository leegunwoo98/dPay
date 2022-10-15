//create a function to check username and password
import {validateUsername, validatePassword} from "./Validation.js"
import {Login_tf} from "./Login_tf.js"
import { AsyncStorage} from "react-native"
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
        var Logged_tf = Login_tf(username,password)
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