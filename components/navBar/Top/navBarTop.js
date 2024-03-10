import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const navBarTop = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                
            }}>
                {/* <Stack.Screen name="CreateAdventure" component={}/>
                <Stack.Screen name="AdventureInProgress" component={} options={{title: "Adventure title"}}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}