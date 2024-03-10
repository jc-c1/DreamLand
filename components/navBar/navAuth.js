import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function navAuth() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }} initialRouteName="Welcome">
                {/* <Stack.Screen name="Welcome" component={}/>
                <Stack.Screen name="LogIn" component={}/>
                <Stack.Screen name="SignUp" component={}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}