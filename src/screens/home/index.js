import { Container, TextTitle } from "./style";
import { TopTabs } from "../../componentes/TopTabs";
import { Carousel } from "../../componentes/Carousel";

export function Home(){
    return(
        <Container>
            <TextTitle>Os Melhores</TextTitle>
                <Carousel/>
                <TopTabs />
        </Container>
    )
}