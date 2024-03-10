import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navBarTop from '../Top/navBarTop';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import UserProfile from '../../user/userProfile';
import StoryScreen from '../../../pages/StoryScreen';

const Tab = createBottomTabNavigator();

export const NavBarBot = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "purple",
                tabBarInactiveTintColor: "lightgrey",
            }} initialRouteName="Home">

                <Tab.Screen name="Home" component={StoryScreen} options={{
                    tabBarIcon: ({ color }) => <Ionicons name="library-sharp" size={20} color={color} />
                }}/>
                <Tab.Screen name="Adventure" component={navBarTop} options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="paint-brush" size={24} color={color} />
                }}/>
                <Tab.Screen name="Profile" component={UserProfile} options={{
                    tabBarLabel: "Profile", 
                    tabBarIcon: ({ color }) => <Ionicons name="person-sharp" size={20} color={color} />}} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}