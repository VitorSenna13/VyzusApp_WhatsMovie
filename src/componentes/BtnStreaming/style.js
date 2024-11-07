import styled from "styled-components/native";
import { Fontisto } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
    width: 250px;
    height: 50px;
    background-color: ${props => props.logoBackground ? props.logoBackground : '#000'};
    border-radius: 5px;
    margin: 5px auto;
    flex-direction: row;
    align-items: center;
`;

export const NameStreaming = styled.Text`
    font-size: 18px;
    color: #fff;
`;

export const LogoStreaming = styled(Fontisto)`
    margin: 0 10px;
`;