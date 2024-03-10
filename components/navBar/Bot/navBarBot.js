import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import UserProfile from '../../user/userProfile';
import StoryScreen from '../../../pages/StoryScreen';
import StoryDetailScreen from '../../../pages/StoryDetailScreen';
import PractiseScreen from '../../../pages/PractiseScreen';
import BackImg from '../../../components/readingScreen/backImg';

const Tab = createBottomTabNavigator();

const MainStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Story" component={StoryScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="StoryDetail" component={StoryDetailScreen} />
    </MainStack.Navigator>
  );
}

const AdventureStack = createNativeStackNavigator();

function AdventureStackScreen() {
  return (
    <AdventureStack.Navigator>
      <AdventureStack.Screen name="Practise" component={PractiseScreen} options={{ headerShown: false }} />
      <AdventureStack.Screen name="Background" component={BackImg} />
    </AdventureStack.Navigator>
  );
}

export const NavBarBot = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "#656565",
          tabBarStyle: { backgroundColor: "#d8a7a9" },
        }} initialRouteName="Home">

        <Tab.Screen name="Home" component={MainStackScreen} options={{
          tabBarIcon: ({ color }) => <Ionicons name="library-sharp" size={20} color={color} />,
          headerStyle: { backgroundColor: "#d8a7a9"},
        }} />
        <Tab.Screen name="Start Your Adventure!" component={AdventureStackScreen} options={{
          tabBarLabel: "Adventure",
          tabBarIcon: ({ color }) => <FontAwesome5 name="paint-brush" size={24} color={color} />,
          headerStyle: { backgroundColor: "#d8a7a9"},
        }} />
        <Tab.Screen name="Profile" component={UserProfile} options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-sharp" size={20} color={color} />,
          headerStyle: { backgroundColor: "#d8a7a9"},
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}