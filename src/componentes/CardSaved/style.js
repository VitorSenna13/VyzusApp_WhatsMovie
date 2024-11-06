import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 220px;
    flex-direction: row;
    border-radius: 15px;
    padding: 10px;
    margin: 5px 0;
`;

export const ContImage = styled.View`
    width: 42%;
    height: 100%;
    border-radius: 20px;
`;

export const PreviewImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`;

export const ContDescription = styled.View`
    width: 57%;
    height: 100%;
    padding: 10px;
`;

export const TitlePreview = styled.Text`
    font-size: 17px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 30px;
`;

export const InfoPreview = styled.Text`
    padding: 0 5px;
    font-size: ${props => props.size ? props.size : '15px'};
    color: ${props => props.color ? props.color : '#fff'};
`;

export const ContImplementInfo = styled.View`
    flex-direction: row;
    margin-bottom: 7px;
    align-items: center;
`;