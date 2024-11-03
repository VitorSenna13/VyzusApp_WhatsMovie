import { ImgBackground, ContGradient } from "./styled";


export function Cover(props){
    return(
        <ImgBackground src={props.uri}>
            <ContGradient colors={["rgba(0,0,0, 0.2)", "#000"]}>
                {props.children}
            </ContGradient>
        </ImgBackground>
    )
}