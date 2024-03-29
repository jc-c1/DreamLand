import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import UserProfile from '../../user/userProfile'
import StoryScreen from '../../../pages/StoryScreen'
import StoryDetailScreen from '../../../pages/StoryDetailScreen'
import StoryCreatorScreen from '../../../pages/StoryCreatorScreen'
import BackImg from '../../../components/readingScreen/BackImg'

const Tab = createBottomTabNavigator()

const MainStack = createNativeStackNavigator()

function MainStackScreen () {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='Home'
        component={StoryScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#d8a7a9' }
        }}
      />
      <MainStack.Screen
        name='StoryDetail'
        component={StoryDetailScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#d8a7a9' }
        }}
      />
    </MainStack.Navigator>
  )
}

const AdventureStack = createNativeStackNavigator()

function AdventureStackScreen () {
  return (
    <AdventureStack.Navigator>
      <AdventureStack.Screen
        name='StoryCreator'
        component={StoryCreatorScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#d8a7a9' },
          title: 'Start Your Adventure!'
        }}
      />
      <AdventureStack.Screen
        name='Background'
        component={BackImg}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#d8a7a9' },
          title: 'Your Adventure!',
          headerBackTitle: 'Back'
        }}
      />
    </AdventureStack.Navigator>
  )
}

export const NavBarBot = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: '#656565',
          tabBarStyle: { backgroundColor: '#d8a7a9' }
        }}
        initialRouteName='Home'
      >
        <Tab.Screen
          name='Main'
          component={MainStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='library-sharp' size={20} color={color} />
            ),
            tabBarLabel: 'Home',
            headerShown: false
          }}
        />
        <Tab.Screen
          name='Start Your Adventure!'
          component={AdventureStackScreen}
          options={{
            tabBarLabel: 'Adventure',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name='paint-brush' size={24} color={color} />
            ),
            headerStyle: { backgroundColor: '#d8a7a9' },
            headerShown: false
          }}
        />
        <Tab.Screen
          name='Profile'
          component={UserProfile}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='person-sharp' size={20} color={color} />
            ),
            headerStyle: { backgroundColor: '#d8a7a9' }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
