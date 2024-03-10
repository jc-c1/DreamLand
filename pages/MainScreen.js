// MainScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the Main Screen</Text>
      <Button
        title="Go to Story"
        onPress={() => navigation.navigate("Story")}
      />
      <Button
        title="Go to Practise"
        onPress={() => navigation.navigate("Practise")}
      />
    </View>
  );
}

export default MainScreen;
