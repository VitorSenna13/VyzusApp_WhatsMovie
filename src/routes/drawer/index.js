import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../../screens/home";
import { Movies } from "../../screens/movies";
import { Series } from "../../screens/series";


export function DrawerRoutes(){

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator
        screenOptions={{
            drawerStyle: {backgroundColor: '#242A32'},
            drawerInactiveTintColor: '#fff',
            headerStyle: {backgroundColor: '#242A32'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
            />

            <Drawer.Screen
                name="Filmes"
                component={Movies}
            />

            <Drawer.Screen
                name="Series"
                component={Series}
            />

        </Drawer.Navigator>
    )
}