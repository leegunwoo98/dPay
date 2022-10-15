import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../ThemeColor.js";
const styles = StyleSheet.create({
  small:{
    Transaction:{
      backgroundColor:colors.primary,
      display:"flex",
      flexDirection:"row",
      marginLeft:10,
      marginRight:10,
      marginTop:3,
      marginBottom:3,
      padding:5,
      position:"relative",
      zIndex:1,
      borderRadius:10
      
    },
    name:{
      width:100,

    }
  }
});

export default styles