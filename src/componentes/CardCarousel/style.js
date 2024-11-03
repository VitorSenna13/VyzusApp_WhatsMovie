import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    margin: 0px 15px;
`;


export const TopNumber = styled.View`
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: 8px;
    left: 80px;
    width: 35px;
    height: 35px;
    border-radius: 50px;
    background-color: #FF3232;
`;

export const TextTopNumber = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

export const Card = styled.View`
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 190px;
    background-color: #000;
    border-radius: 10px;
`;

export const ImageCard = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;