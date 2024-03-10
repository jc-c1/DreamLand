import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

function PractiseScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [person, SetPerson] = useState({ name: 'mario', age: 40})
  const clickHandler = () => {
    setName('a different name');
    SetPerson({name: 'luigi', age:45})
  }


  
  return (

      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
      <View style={styles.header}>
        <Text style={styles.boldText}>Your story starts here...</Text>
      </View>
      <Text>Enter name: </Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)} />
      <Text>Enter age: </Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 30'
        onChangeText={(val) => setAge(val)} />
      <Text>name: {name}, age: {age}</Text>
      <View style={styles.body}>
        <Text>My name is {name}</Text> 
        <Text>His name is {person.name} and his age is {person.age}</Text> 
      </View>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
      </ImageBackground>

  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // Ensure the children components are positioned correctly
    justifyContent: 'center',
    alignItems: 'center',
  },

  
});


export default PractiseScreen;

