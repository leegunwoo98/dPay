import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login/Login.js';

export default function App() {
  //create a state to store user id
  const [userID, setUserID] = React.useState(null);
  return (
    <Login setUserID={setUserID}/>
  );
}