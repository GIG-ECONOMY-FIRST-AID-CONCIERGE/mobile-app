import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// COMPONENTS
import HomePage from '../../screens/index';
import FeedbackPage from '../../screens/feedback';
import ErrorPage from '../../screens/error';

const Stack = createNativeStackNavigator();

const Navigation = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Feedback" component={FeedbackPage} />
                <Stack.Screen name="Error" component={ErrorPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;
