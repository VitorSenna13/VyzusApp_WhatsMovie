import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.background};
`;

export const TextTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${theme.textColor};
    text-transform: uppercase;
    margin: 15px 0px;
    margin-left: 15px;
`;