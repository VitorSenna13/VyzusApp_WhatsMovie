import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Search } from "../../screens/search";
import { Saved } from "../../screens/saved";
import { DrawerRoutes } from "../drawer";
import { Ionicons } from '@expo/vector-icons';

export function TabRoutes(){

    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarStyle: {backgroundColor: '#353535', height: 70},
            tabBarLabelStyle: {bottom: 10},
            tabBarInactiveTintColor: "#67686D",
            tabBarActiveTintColor: "#fff",
            headerShown: false
        }}
        >
            <Tab.Screen 
                name="Drawer"
                component={DrawerRoutes}
                options={{
                    title: 'Home',
                    tabBarIcon: ({size, color,focused}) => {
                        if(focused){
                            return <Ionicons name="home" size={size} color={color}/>
                        }else{
                            return <Ionicons name="home-outline" size={size} color={color}/>
                        }
                    }
                }}
            />

            <Tab.Screen 
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="search" size={size} color={color}/>
                }}
            />

            <Tab.Screen 
                name="Saved"
                component={Saved}
                options={{
                    tabBarIcon: ({size, color, focused}) => {
                        if(focused){
                            return <Ionicons name="bookmark" size={size} color={color}/>
                        }else{
                            return <Ionicons name="bookmark-outline" size={size} color={color}/>
                        }
                    }
                }}
            />

        </Tab.Navigator>
    )
}