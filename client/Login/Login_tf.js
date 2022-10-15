import React from "react";

//check if username and password matches from the database
export function Login_tf(username,password){
    if(username=="test" && password=="test"){
        return true;
    }
    else{
        return false;
    }
}