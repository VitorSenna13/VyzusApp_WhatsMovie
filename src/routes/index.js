import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from "./stack";
import { StatusBar } from 'react-native';
import { theme } from '../theme/theme';

export function Routes(){
    return(
        <NavigationContainer>
            <StatusBar backgroundColor={theme.statusBar}/>
            <StackRoutes />
        </NavigationContainer>
    )
}