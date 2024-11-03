import { Container } from "./style"
import { moviesApi } from "../../services/api";
import { ListFilm } from "../../componentes/ListFilm";

export function Series(){

    const filterSeries = moviesApi.filter(item => item.class === 'Série');

    return(
        <Container>
            <ListFilm data={filterSeries} columns={3} />
        </Container>
    )
}