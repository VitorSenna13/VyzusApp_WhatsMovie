import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.background};
`;

export const TextTitle = styled.Text`
    margin: 30px 0;
    padding: 0 20px;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
`;

export const ContInput = styled.View`
    width: 100%;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
`;

export const InputStyle = styled.View`
    width: 90%;
    height: 40px;
    border-radius: 5px;
    background-color: #fff;
`;

export const SearchInput = styled.TextInput`
    width: 100%;
    height: 100%;
    padding: 0px 8px;
`; 

