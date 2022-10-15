import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from "./StyleSheet.js";

const smallTransaction = (Transactions) => {
  return (
    <View style={styles.smallTransaction}>
      <Text style={styles.smallTransactionText}>{Transactions.name}</Text>
      <Text style={styles.smallTransactionText}>{Transactions.amount}</Text>
    </View>
  );
};
