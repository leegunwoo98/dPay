import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from "./StyleSheet";
import {LoginCheck} from "./LoginCheck.js";
const Login = (setUserID) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  //create reference
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
    //create a function to check username and password
  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="username"
        ></TextInput>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          placeholder="password"
        ></TextInput>
      </View>
      <View style={styles.button_container}>
        <Button
          title="Login"
          style={styles.button}
          onPress={() => LoginCheck(username, password, setUserID)}
        ></Button>
        <Button
          title="Register"
          style={styles.buton}
          onPress={(e) => alert("Register")}
        ></Button>
      </View>
    </View>
  );
};
export default Login;
