import { Container, NameStreaming,LogoStreaming } from "./style";
import { logos } from "./api";

export function BtnStreaming(props){

    const found = logos.find(item => props.streaming.toLowerCase() === item.name.toLowerCase());

    return(
        <Container logoBackground={found.color}>
            <LogoStreaming name={found.logo} size={25} color='#fff'/>
            <NameStreaming>{props.streaming}</NameStreaming>
        </Container>
    )
}