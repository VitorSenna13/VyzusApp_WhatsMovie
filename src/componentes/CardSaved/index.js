import { Container,ContImage, PreviewImage, ContDescription, TitlePreview, InfoPreview, ContImplementInfo } from "./style";
import { Ionicons } from '@expo/vector-icons';


export function CardSaved(props){

    function filterTitle(value){
        if(value.length < 22){
            return value;
        }

        return `${value.substring(0, 18)}...`;
    }

    return(
        <Container onPress={props.click}>
            <ContImage>
                <PreviewImage src={props.uriImage} />
            </ContImage>
            <ContDescription>

                <TitlePreview>{filterTitle(props.title)}</TitlePreview>

                <ContImplementInfo>
                    <Ionicons name="star" size={20} color="#ffff00"/>
                    <InfoPreview color='#ffff00'>{props.critic}%</InfoPreview>
                </ContImplementInfo>

                <ContImplementInfo>
                    <Ionicons name="ticket" size={20} color="#fff"/>
                    <InfoPreview size='14px'>{props.genre}</InfoPreview>
                </ContImplementInfo>

                <ContImplementInfo>
                    <Ionicons name="calendar" size={20} color="#fff"/>
                    <InfoPreview >{props.year}</InfoPreview>
                </ContImplementInfo>

                <ContImplementInfo>
                    <Ionicons name="time" size={20} color="#fff"/>
                    <InfoPreview >{props.time}</InfoPreview>
                </ContImplementInfo>


            </ContDescription>
        </Container>
    )
}