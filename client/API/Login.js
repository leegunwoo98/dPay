import React from "react";
import sampleUser from "../sampleUser.js";

//check if username and password matches from the database
export function Login(username,password){
    if(username=="test" && password=="test"){
        return sampleUser;
    }
    else{
        return null;
    }
}