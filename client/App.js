import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Login/Login.js";
import React from "react";
import Registration from "./Registration/Registration.js";
import Home from "./Home/Home.js";


export default function App() {
  //create a state to store user id
  const [user, setUserID] = React.useState(null);
  const [pageID, setPageID] = React.useState("login");
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  switch (pageID) {
    case "login":
      return <Login setUser={setUser} setPageID={setPageID} setUserNameGlobal={setUserName} setPasswordGlobal={setPassword}/>;
    case "registration":
      return (
        <Registration
          userNameGlobal={username}
          passwordGlobal={password}
          setUserNameGlobal={setUserName}
          setPasswordGlobal={setPassword}
          setPageID={setPageID}
        />
      );
    case "home":
      return <Home userID={userID} username={username} password={password} setUserID={setUserID} setPageID={setPageID}>Home</Home>;
    default:
      return <Login setUSerID={setUserID} setPageID={setPageID} />;
  }
}

//export setPageID from function App