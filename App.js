import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Auth } from "./components/user/auth";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.sampleText}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  
  sampleText : {
    color: '#fff'
  },

  container: {
    flex: 1,
    backgroundColor: '#101820',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
