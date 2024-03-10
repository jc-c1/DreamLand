import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoryScreen from '../../../pages/StoryScreen';

const Stack = createNativeStackNavigator();

export default function navBarTop() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                
            }} initialRouteName="CreateAdventure">
                {/* <Stack.Screen name="CreateAdventure" component={StoryScreen}/>
                <Stack.Screen name="AdventureInProgress" component={} options={{title: "Adventure title"}}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}