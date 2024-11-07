import { Container, TextTitle } from "./style";
import { TopTabs } from "../../componentes/TopTabs";
import { Carousel } from "../../componentes/Carousel";

export function Home(){
    return(
        <Container>
            <TextTitle>Adorados pelo público</TextTitle>
                <Carousel/>
                <TopTabs />
        </Container>
    )
}