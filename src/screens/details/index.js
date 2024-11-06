import { useContext } from "react";
import { Container, Title, Info, ContCapa, ImageCapa, ContInfo,
     Genre, Duration, ContCritic, Public, Critic, NoteCritic, ContainerTabs, Description } from "./style";
import { HeaderPerson } from "../../componentes/HeaderPerson";
import { Cover } from "../../componentes/Cover";
import { Ionicons } from '@expo/vector-icons';
import { BtnStreaming } from "../../componentes/BtnStreaming";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { handleAsyncStorage } from "../../context/storage";
import { ContextData } from "../../context/context";
import { theme } from "../../theme/theme";

function TopTabsDetails(props){

    const Tab = createMaterialTopTabNavigator();

    const DescriptionData = () => {
        return(
            <ContainerTabs>
                <Description>{props.description}</Description>
            </ContainerTabs>
        )
    }

    const WhatsData = () => {
        return(
            <ContainerTabs>
                {
                props.streamings? 
                    props.streamings
                : 
                    <Description>Não está disponivel em nenhum Streaming</Description>
                }
            </ContainerTabs>
        )
    }

    return(
        <Tab.Navigator 
        screenOptions={{
          tabBarIndicatorContainerStyle: {backgroundColor: theme.navbar},
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

    const {data, setData} = useContext(ContextData);

    function vizStreaming(){
        if(route.params.info.streamings){

            const streamings = route.params.info.streamings;

            return streamings.map((results, index) => (
                <BtnStreaming key={index} streaming={results} />
            ));
            
        }
    }

    const found = data ? data.find(item => route.params.id === item.id) : null;

    return(
        <Container>
            <HeaderPerson title="Detalhes" icon={found ? 'bookmark' : 'bookmark-outline'} click={() => handleAsyncStorage(route.params, setData)}/>

            <Cover uri={route.params ? route.params.banner : null}>
                <ContCapa>
                    <ImageCapa src={route.params ? route.params.image: null}/>
                </ContCapa>

                <ContInfo>
                    <Info>
                        <Title>{route.params ? route.params.name : null}</Title>
                        <Genre>{route.params ? route.params.genre : null}</Genre>
                        <Duration>{route.params ? route.params.year : null} | {route.params ? route.params.time : null}</Duration>
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

            <TopTabsDetails 
                description={route.params ? route.params.info.description : null}
                streamings={route.params ? vizStreaming() : null}
            />
            
        </Container>
    )
}