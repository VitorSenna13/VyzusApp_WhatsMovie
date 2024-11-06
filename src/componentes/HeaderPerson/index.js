import { Container, BackButton, ContTitle, Title, LeftButton} from "./style";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export function HeaderPerson(props){

    const navigation = useNavigation();

    return(
        <Container>
            <BackButton onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={35} color="#fff"/>
            </BackButton>

            <ContTitle>
                <Title>{props.title}</Title>
            </ContTitle>

            <LeftButton onPress={props.click}>
                <Ionicons name={props.icon} size={35} color="#fff" />
            </LeftButton>
        </Container>
    )
}