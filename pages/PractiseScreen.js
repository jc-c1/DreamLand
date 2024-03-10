import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function PractiseScreen() {
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState('30');
  const [person, SetPerson] = useState({ name: 'mario', age: 40})
  const clickHandler = () => {
    setName('a different name');
    SetPerson({name: 'luigi', age:45})
  }


  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    marginTop:20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});


export default PractiseScreen;

