import { Container, TopNumber, TextTopNumber, Card, ImageCard } from "./style";


export function CardCarousel(props){
    return(
        <Container onPress={props.click}>
            <Card>
                <ImageCard source={{
                    uri: props.uriImage
                }} />
            </Card>
            <TopNumber>
                <TextTopNumber>
                    {props.number}
                </TextTopNumber>
            </TopNumber>
        </Container>
    )
}