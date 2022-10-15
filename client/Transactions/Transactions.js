import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from "./StyleSheet.js";
import {getUsers} from "../API/User.js"

export const SmallTransaction = ({Transactions, setPageID}) => {
    const[user,setUser] = React.useState(Transactions.user);
  return (
    <Button style={styles.small.Transaction}>
      <Text style={styles.small.TransactionText}>32</Text>
      

    </Button>
  );
};
