import { Container } from "./style";
import { ListFilm } from "../../componentes/ListFilm";
import { moviesApi } from "../../services/api";

export function Movies(){

    const filterMovies = moviesApi.filter(item => item.class === 'Filme')

    return(
        <Container>
            <ListFilm data={filterMovies} columns={3} />
        </Container>
    )
}