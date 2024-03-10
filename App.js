import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './pages/MainScreen';
import StoryScreen from './pages/StoryScreen';
import PractiseScreen from './pages/PractiseScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Story" component={StoryScreen} />
        <Stack.Screen name="Practise" component={PractiseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
