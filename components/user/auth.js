import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, 
    Image, SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { onAuthStateChanged
} from "firebase/auth";

import { LogIn } from "./logIn" ;
import {NavBarBot} from "../navBar/Bot/navBarBot"

import { auth } from '../../config/firebase';

export const Auth = () => {
    // const user = auth.currentUser;
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const toAuth = () => {
      return (
        <TouchableWithoutFeedback onPress={handleOutsideClick}>
          <SafeAreaView style={styles.totalcontainer}>
            <View style={styles.totalcontainer}>
              {page == "login" ? (
                <LogIn setPage={setPage} />
              ) : (
                <SignUp setPage={setPage} />
              )}
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      )
    }

    

    const handleOutsideClick = () => {
        Keyboard.dismiss();
      }
        const [page, setPage] = useState("login");
      
        return (user ? <NavBarBot /> : toAuth());
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  totalcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#101820"
  },
  preview: {
    marginBottom: -300,
    marginTop: 40,
    resizeMode: 'contain',
    height: 200
  },
});