import { Container, Capa } from "./style";


export function CardMovie(props){

    return(
        <Container onPress={props.click}>
            <Capa source={{
                uri: props.uriImage
            }} />
        </Container>
    )
}