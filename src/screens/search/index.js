import { useState, useEffect } from "react";
import { Container, TextTitle, ContInput, InputStyle, SearchInput } from "./style";
import { ListFilm } from "../../componentes/ListFilm";
import { moviesApi } from "../../services/api";

export function Search(){

    const [textSearch, setTextSearch] = useState('');
    const [filterApi, setFilterApi] = useState(moviesApi);

    useEffect(()=>{
        if(textSearch === ''){
            setFilterApi(moviesApi);
        }else{
            setFilterApi(
                moviesApi.filter((item) => item.name.toLowerCase().indexOf(textSearch.toLowerCase()) > -1)
            );
        }
    }, [textSearch]);

    return(
        <Container>
            <TextTitle>O que deseja assistir hoje?</TextTitle>
            <ContInput>
                <InputStyle>
                    <SearchInput placeholder="Filmes, Séries, Documentários..." value={textSearch} onChangeText={(text) => setTextSearch(text)} />
                </InputStyle>
            </ContInput>
                <ListFilm data={filterApi} columns={3}/>
        </Container>
    )
}