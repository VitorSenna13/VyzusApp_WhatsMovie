import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.background};
`

export const Info = styled.View`
    max-width: 68%;
`

export const Title = styled.Text`
    padding-top: 5px;
    font-size: 20px;
    font-weight: 500;
    color: ${theme.textColor};
`;

export const ContCapa = styled.View`
    width: 100px;
    height: 150px;
    border-radius: 10px;
`;

export const ImageCapa = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ContInfo = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Genre = styled.Text`
    font-size: 13px;
    color: #c4c4c4;
`;

export const Duration = styled.Text`
    font-size: 13px;
    color: #fff;
`;

export const ContCritic = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`;

export const Public = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;

export const Critic = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 0 5px;
`;

export const NoteCritic = styled.Text`
    font-size: 14px;
    color: #fff;
`;

export const ContainerTabs = styled.ScrollView`
    width: 100%;
    height: 100%;
    background-color: ${theme.background};
    padding: 35px;
`

export const Description = styled.Text`
    padding-bottom: 60px;
    text-align: center;
    font-size: 20px;
    color: #fff;
`