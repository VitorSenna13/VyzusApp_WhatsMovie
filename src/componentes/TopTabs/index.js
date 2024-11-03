import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ListFilm } from '../ListFilm';
import { moviesApi } from '../../services/api';

export function TopTabs(){

    const Tab = createMaterialTopTabNavigator();

    function SerieData(){

        const filterSerie = moviesApi.filter(item => item.class === 'Série');

        return <ListFilm columns={3} data={filterSerie} />
    }

    function MovieData(){
        const filterFilme = moviesApi.filter(item => item.class === 'Filme');

        return <ListFilm columns={3} data={filterFilme} />
    }
    
    return (
      <Tab.Navigator 
      screenOptions={{
        tabBarIndicatorContainerStyle: {backgroundColor: '#404040'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarIndicatorStyle: {backgroundColor: '#FF3232'}
      }}
      >
        <Tab.Screen name="Filmes" component={MovieData}/>
        <Tab.Screen name="Series" component={SerieData}/>
      </Tab.Navigator>
    );
  }