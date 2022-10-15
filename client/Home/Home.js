import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from "./HomeStyleSheet.js";
import {getUser} from '../API/User.js'
import Svg, { Path, Use, Image} from "react-native-svg";
import Transactions from '../Transactions/Transactions.js'
import {getGeoLocation} from '../Location.js'

export default function Home({ userID, username,password,setUserID, setPageID }) {
    const [user,setUser]=React.useState(getUser(userID,username,password));
    const location = getGeoLocation();
    return (
        <View style={styles.container}>
            <View style = {styles.top}>
                <View style={styles.notification_container}>
                    <Button title="Notification" style={styles.notification_button}>
                        Notification
                    </Button>
                </View>
                <View style={styles.username_container}>
                    <Text style={styles.username}>{user.username}</Text>
                </View>
                <View style={styles.settings_container}>
                    <Button
                        title="Settings"
                        style={styles.settings}
                        onPress={() => setPageID("settings")}
                    ></Button>
                </View>
            </View>
            <View style={styles.balance_container}>
                <Text style={styles.balance}>${user.balance}</Text>
            </View>
            <View style={styles.transaction_container}>
                {user.Transactions.map((transaction) => (
                    <Transactions
                        key={transaction.id}
                        transaction={transaction}
                    ></Transactions>
                ))}
            </View>
            
        </View>
    );
}