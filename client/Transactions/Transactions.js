import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from "./StyleSheet.js";

const smallTransaction = (Transactions) => {
  return (
    <View style={styles.small.Transaction}>
      <Text style={styles.small.TransactionText}>{Transactions.amount}</Text>
      
    </View>
  );
};
