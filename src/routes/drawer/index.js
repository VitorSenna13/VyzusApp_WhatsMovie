import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../../screens/home";
import { Movies } from "../../screens/movies";
import { Series } from "../../screens/series";


export function DrawerRoutes(){

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator
        screenOptions={{
            drawerStyle: {backgroundColor: '#353535'},
            drawerInactiveTintColor: '#fff'
        }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    headerStyle: {backgroundColor: '#353535'},
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                }}
            />

            <Drawer.Screen
                name="Filmes"
                component={Movies}
                options={{
                    headerStyle: {backgroundColor: '#353535'},
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                }}
            />

            <Drawer.Screen
                name="Series"
                component={Series}
                options={{
                    headerStyle: {backgroundColor: '#353535'},
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                }}
            />

        </Drawer.Navigator>
    )
}