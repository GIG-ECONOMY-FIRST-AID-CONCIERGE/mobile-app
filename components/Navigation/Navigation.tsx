import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// COMPONENTS
import HomePage from '../../screens/index';
import FeedbackPage from '../../screens/feedback';
import ErrorPage from '../../screens/error';

// INTERFACES
import { INavigation } from '../../interfaces/navigation.interface';

const Stack = createNativeStackNavigator();

const Navigation = ({ location }: INavigation): JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home">
                    {(props) => <HomePage {...props} location={location} />}
                </Stack.Screen>
                <Stack.Screen name="Feedback" component={FeedbackPage} />
                <Stack.Screen name="Error" component={ErrorPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;
