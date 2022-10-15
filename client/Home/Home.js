import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from "./HomeStyleSheet.js";

export default function Home({ userID, setPageID }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Text style={styles.text}>User ID: {userID}</Text>
            <Button
                title="Logout"
                style={styles.button}
                onPress={() => setPageID("login")}
            ></Button>
        </View>
    );
}