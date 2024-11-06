import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Container = styled.View`
    flex: 0.5;
    flex-direction: row;
    align-items: center;
    padding-bottom: 5px;
`;

export const List = styled.FlatList`
    background-color: ${theme.background};
`;