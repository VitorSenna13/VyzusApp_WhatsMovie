import {createStackNavigator} from '@react-navigation/stack';
import { TabRoutes } from '../tab';
import { Details } from '../../screens/details';

export function StackRoutes(){

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#353535'},
                headerTintColor: '#fff'
            }}
        >

            <Stack.Screen
                name='Tab'
                component={TabRoutes}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name='Details'
                component={Details}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}