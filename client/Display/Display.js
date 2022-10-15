import React from "react";
import styles from "./StyleSheet.js"
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Display({username, userID}){
    return(
    <Button style={styles.round}>
        <Text>{username.charAt(0).toUpperCase()}</Text>
    </Button>
    )
}