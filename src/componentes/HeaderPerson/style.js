import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Container = styled.View`
    width: 100%;
    padding: 15px 10px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${theme.navbar};
`;

export const BackButton = styled.TouchableOpacity`
`;

export const ContTitle = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: 500;
    color: #fafafa;
`;

export const LeftButton = styled.TouchableOpacity`
`;