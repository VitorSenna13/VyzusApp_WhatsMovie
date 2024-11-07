import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ListFilm } from '../ListFilm';
import { moviesApi } from '../../services/api';
import { theme } from '../../theme/theme';

export function TopTabs(){

    const Tab = createMaterialTopTabNavigator();


    function NewMovies(){
        const filterFilme = moviesApi.filter(item => item.year === '2024');

        return <ListFilm columns={3} data={filterFilme} />
    }

    function Popular(){
      const filterFilme = moviesApi.filter(item => item.public_note > 85);

        return <ListFilm columns={3} data={filterFilme} />
    }
    
    function Upcoming(){

      return <ListFilm columns={3} data={moviesApi} />
    }

    return (
      <Tab.Navigator 
      screenOptions={{
        tabBarIndicatorContainerStyle: {backgroundColor: theme.navbar},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarIndicatorStyle: {backgroundColor: '#FF3232'}
      }}
      >
        <Tab.Screen name="Assistir agora" component={Upcoming}/>
        <Tab.Screen name="Lançamentos" component={NewMovies}/>
        <Tab.Screen name="Populares" component={Popular}/>
        
      </Tab.Navigator>
    );
  }