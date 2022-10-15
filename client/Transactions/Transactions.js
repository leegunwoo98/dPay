import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from "./StyleSheet.js";
import {getUsers} from "../API/User.js"
import Display from "../Display/Display.js"

export default function SmallTransaction({transaction, setPageID}){
    // const[user,setUser] = React.useState(transactions.user);
  return (
    <View style={styles.small.Transaction}>
      <Text style={styles.small.name}>{transaction.name}</Text>
      <Text style={styles.small.TransactionText}>{transaction.amount}</Text>
      {
        transaction.peoples.map((user)=>{
          <Display username={user.username} userID={user.id}/>
        })
      }
    </View>
  );
};
