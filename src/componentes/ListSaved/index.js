import { List } from "./style";
import { CardSaved } from "../CardSaved";
import { useNavigation } from "@react-navigation/native";

export function ListSaved(props){

    const navigation = useNavigation();

    return <List
                data={props.data}
                horizontal={false}
                numColumns={1}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                    <CardSaved 
                        click={() => navigation.navigate('Details', item)} 
                        uriImage={item.image} title={item.name} 
                        critic={item.critic_note} 
                        genre={item.genre} 
                        year={item.year}
                        time={item.time}
                    />
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 100, paddingTop: 10}}
            />
}
