import React from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"
import styles from "./StyleSheet"
const Login = () => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    return (
    <View   style={styles.container}>
        <TextInput style={styles.input} onChangeText ={setUsername} value={username}></TextInput>
        <TextInput style={styles.input} onChangeText ={setPassword} value={password}></TextInput>
    </View>
    )
}
export default Login