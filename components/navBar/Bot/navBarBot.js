import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const navBarBot = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "purple",
                tabBarInactiveTintColor: "lightgrey",
            }}>
                {/* <Tab.Screen name="Home" component={}/>
                <Tab.Screen name="Adventure" component={} />
                <Tab.Screen name="Profile" component={} options={{tabBarLabel: "Profile"}}/> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}