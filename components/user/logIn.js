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

export const LogIn = ({ setPage }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const logoImg = require("../../assets/Img/AppIcon.jpeg");

  
    const loginUser = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("Successfully logged in");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  
    return (
      <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Image source={logoImg} style={styles.logoImage} resizeMode="contain" />
          </View>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.signUp}>
          Don't have an account?
          <Text style={styles.signUpText} onPress={() => setPage("signup")}>
            {" "}
            Sign Up
          </Text>
        </Text>
        <View style={styles.inputboxes}>
          <View style={styles.usernamePasswordBox}>
            <MaterialIcons name="alternate-email" size={20} color="#666" />
            <TextInput
              style={styles.inputUsername}
              onChangeText={setEmail}
              value={email}
              placeholder="Enter Email"
            />
          </View>
  
          <View style={styles.usernamePasswordBox}>
            <MaterialIcons name="lock" size={20} color="#666" />
            <TextInput
              style={styles.inputPassword}
              onChangeText={setPassword}
              value={password}
              placeholder="Enter Password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.LogInBox}>
            <TouchableOpacity style={{ flex: 1 }} onPress={loginUser}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
      backgroundColor: "#e8979a",
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
      color: "#e8979a",
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
      color: "#e8979a",
    },
    preview: {
      marginBottom: -300,
      marginTop: 40,
      resizeMode: 'contain',
      height: 200
    },
    logoImage: {
      width: 250,
      height: 250,
      borderRadius: 135,
      borderColor: '#d8a7a9',
      borderWidth: 10,
    },
  });