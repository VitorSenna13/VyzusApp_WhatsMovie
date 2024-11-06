import { useContext } from "react";
import { Container } from "./style";
import { ListSaved } from "../../componentes/ListSaved";
import {ContextData} from "../../context/context";


export function Saved(){

    const {data} = useContext(ContextData);

    return(
        <Container>
            <ListSaved 
                data={data}
            />
        </Container>
    )
}