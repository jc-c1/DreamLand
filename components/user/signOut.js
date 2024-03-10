import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, 
    Image, SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut, onAuthStateChanged
} from "firebase/auth";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { auth } from '../../config/firebase';

export const SignOut = () => {
    
    const signout = () => {
      signOut(auth)
        .then(() => {
          console.log("Successfully logged out");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <View>
        <Button color="white" title="Sign out" onPress={signout} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    usernamePasswordBox: {
      flexDirection: "row",
      marginBottom: 12,
      marginTop: 6,
      padding: 12,
      backgroundColor: "#F2F2F2",
      borderRadius: 10,
    },
    LogInBox: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      marginBottom: 12,
      marginTop: 6,
      padding: 12,
      backgroundColor: "#547999",
      borderRadius: 10,
    },
    inputUsername: {
      paddingLeft: 6,
      flex: 1,
    },
    inputPassword: {
      paddingLeft: 6,
      paddingRight: 12,
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      
    },
    totalcontainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#101820'
    },
    title: {
      fontWeight: "600",
      marginBottom: 20,
      fontSize: 46,
      color: "white",
    },
    inputboxes: {
      width: 310,
      flexDirection: "col",
    },
    signUp: {
      color: "gray",
      marginBottom: 20,
    },
    signUpText: {
      color: "white",
    },
    preview: {
      marginBottom: -300,
      marginTop: 40,
      resizeMode: 'contain',
      height: 200
    },
  });