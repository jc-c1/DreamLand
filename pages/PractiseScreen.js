import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from "react-native";

function PractiseScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [theme, setTheme] = useState("");
  const navigation = useNavigation();

  const clickHandler = () => {
    if (name && age && theme) {
      // render the new component
      navigation.navigate("Background", { name, age, theme });
    }
  };

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <Text style={styles.boldText}>Your story starts here...</Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.formText}>Enter your hero: </Text>
        <TextInput
          multiline
          style={styles.input}
          value={name}
          placeholder="eg. a girl named Emily"
          onChangeText={setName}
        />
        <Text style={styles.formText}>Enter your child's age: </Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="eg. 5"
          value={age}
          onChangeText={setAge}
        />

        <Text style={styles.formText}>What is your story about: </Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="eg. dragons, magic"
          value={theme}
          onChangeText={setTheme}
        />

        <StatusBar style="auto" />
      </View>
      <View style={styles.header}>
        <Button
          style={styles.boldText}
          title="Generate Story"
          onPress={clickHandler}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // Ensure the children components are positioned correctly
    padding: 15,
    alignItems: "center",
  },

  header: {
    padding: 15,
    margin: 20,
    borderRadius: 15,
    backgroundColor: "white",
    opacity: 0.8,
    alignItems: "center",
  },

  boldText: { color: "black", fontWeight: "bold" },

  formText: { padding: 20 },
  input: { borderColor: "black", borderWidth: 1, padding: 5, borderRadius: 5 },
});

export default PractiseScreen;
