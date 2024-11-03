import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const ImgBackground = styled(ImageBackground)`
    width: 100%;
    height: 325px;
`;

export const ContGradient = styled(LinearGradient)`
    flex: 1;
    padding: 15px 20px;
    justify-content: flex-end;
`;