import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navBarTop from '../Top/navBarTop';

const Tab = createBottomTabNavigator();

export default function navBarBot() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "purple",
                tabBarInactiveTintColor: "lightgrey",
            }}>
                {/* <Tab.Screen name="Home" component={}/>
                <Tab.Screen name="Adventure" component={navBarTop} />
                <Tab.Screen name="Profile" component={} options={{tabBarLabel: "Profile"}}/> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}