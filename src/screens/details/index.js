import { Container, Title, Info, ContCapa, ImageCapa, ContInfo, Genre, Duration, ContCritic, Public, Critic, NoteCritic, ContainerTabs } from "./style";
import { HeaderPerson } from "../../componentes/HeaderPerson";
import { Cover } from "../../componentes/Cover";
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function TopTabsDetails({route}){

    const Tab = createMaterialTopTabNavigator();

    const DescriptionData = () => {
        return(
            <ContainerTabs>

            </ContainerTabs>
        )
    }

    const WhatsData = () => {
        return(
            <ContainerTabs>
                
            </ContainerTabs>
        )
    }

    return(
        <Tab.Navigator 
        screenOptions={{
          tabBarIndicatorContainerStyle: {backgroundColor: '#404040'},
          tabBarInactiveTintColor: '#fff',
          tabBarActiveTintColor: '#fff',
          tabBarIndicatorStyle: {backgroundColor: '#FF3232'}
        }}
        >
          <Tab.Screen name="Description" options={{title: 'Descrição'}} component={DescriptionData}/>
          <Tab.Screen name="Whats" options={{title: 'Onde Assistir?'}} component={WhatsData}/>
        </Tab.Navigator>
    )
}


export function Details({route}){

    return(
        <Container>
            <HeaderPerson title="Detalhes" icon="bookmark-outline"/>

            <Cover uri={route.params ? route.params.banner : null}>
                <ContCapa>
                    <ImageCapa src={route.params ? route.params.image: null}/>
                </ContCapa>

                <ContInfo>
                    <Info>
                        <Title>{route.params ? route.params.name : null}</Title>
                        <Genre>{route.params ? route.params.genre : null}</Genre>
                        <Duration>{route.params ? route.params.time : null}</Duration>
                    </Info>
                    
                    <ContCritic>
                        <Critic>
                            <Ionicons style={{marginRight: 4}} name="star" size={20} color="#ffff00" />
                            <NoteCritic>{route.params ? route.params.critic_note : null}%</NoteCritic>
                        </Critic>

                        <Public>
                            <Ionicons style={{marginRight: 4}} name="person" size={20} color="#fff" />
                            <NoteCritic>{route.params ? route.params.public_note : null}%</NoteCritic>
                        </Public>
                    </ContCritic>
                </ContInfo>
            </Cover>

            <TopTabsDetails/>
            
        </Container>
    )
}