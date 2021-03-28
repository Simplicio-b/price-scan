import styled from 'styled-components/native'

import {
    Platform
} from 'react-native'

export const Container = styled.SafeAreaView `
    flex: 1;
    background-color: ${e => e.bg || '#FFF'};
    padding-top: ${Platform.OS === 'android' ? 21 : 0}px;
`

export const LogoTitle = styled.Text `
    font-size: 36px;
    color: ${e => e.cor || "#5807B8"};
    font-weight: 700;
    font-family: 'Roboto';
`

export const Btn = styled.TouchableOpacity `
    height: 45px;
    width: 100%;
    background-color: ${e => e.bg || '#c4c4c4'};
    border-radius: 15px ;
    justify-content: center;
    align-items: center;

`

export const LblBnt = styled.Text `
    font-size: 18px;
    font-weight: 600;
    color: ${e => e.cor || "#000"};
`

export const Input = styled.TextInput `
    background-color: #FFF;
    width: 100%;
    height: 45px;
    border-radius: 15px;
    padding: 5px 15px;
    color: #444;
    justify-content: center;
    align-items: center;

`