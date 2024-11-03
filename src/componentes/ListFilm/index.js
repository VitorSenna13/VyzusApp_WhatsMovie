import { List } from "./style";
import { CardMovie } from "../CardMovie";
import { useNavigation } from "@react-navigation/native";

export function ListFilm(props){

    const navigation = useNavigation();

    return <List
                data={props.data}
                horizontal={props.horizontal? props.horizontal : false}
                numColumns={props.columns}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <CardMovie click={() => navigation.navigate('Details', item)} uriImage={item.image} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 100, paddingTop: 10}}
            />
}