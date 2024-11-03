import { Container, List } from "./style";
import { CardCarousel } from "../CardCarousel";
import { moviesApi } from "../../services/api";
import { useNavigation } from "@react-navigation/native";

export function Carousel(props){

    const criticTop = moviesApi.filter((item) => item.public_note >= 90).slice(0,5);

    const navigation = useNavigation();

    return(
        <Container>
            <List
                data={criticTop}
                horizontal={true}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <CardCarousel click={() => navigation.navigate('Details', item)} uriImage={item.image} number={item.public_note} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 20}}
            />
        </Container>
    )
}