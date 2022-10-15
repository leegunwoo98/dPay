import React from 'react';
import sampleUser from '../sampleUser.js'

export const getUser=(userID,username,password)=>{
    if(userID==null){
        return null;
    }
    else{
        return {
            username: username,
            password: password,
            userID: userID,
            balance: 42.54
        }
    }
}      