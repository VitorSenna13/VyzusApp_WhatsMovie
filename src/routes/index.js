import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from "./stack";
import { StatusBar } from 'react-native';

export function Routes(){
    return(
        <NavigationContainer>
            <StatusBar backgroundColor="#353535"/>
            <StackRoutes />
        </NavigationContainer>
    )
}