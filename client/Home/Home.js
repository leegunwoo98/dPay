import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from "./HomeStyleSheet.js";

export default function Home({ user, setPageID }) {
    const [user,setUser]=React.useState(null);
    const [transaction, setTransaction] = React.useState(null);
    return (
        <View style={styles.container}>
            <View style = {styles.top}>
                <View style={styles.logOut_container}>
                    <Button
                        title="Log Out"
                        style={styles.logOut}
                        onPress={() => setPageID("login")}
                    ></Button>
                </View>
                <View style={styles.userID_container}>
                    <Text style={styles.userID}>User ID: {userID}</Text>
                </View>
                <View style={style.settings_container}>
                    <Button
                        title="Settings"
                        style={styles.settings}
                        onPress={() => setPageID("settings")}
                    ></Button>
                </View>
            </View>
            <View style={styles.balance_container}>
                <Text style={styles.balance}>Balance: $0.00</Text>
            </View>

        </View>
    );
}