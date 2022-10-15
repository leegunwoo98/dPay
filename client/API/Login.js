import React from "react";
import sampleUser from "../sampleUser.js";

//check if username and password matches from the database
export async function Login(username,password){
    if(username=="Tester" && password=="Tester"){
        
        return sampleUser;
    }
    else{
        return null;
    }
}