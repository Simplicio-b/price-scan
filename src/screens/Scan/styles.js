import styled from 'styled-components/native'

export const BtnBack = styled.TouchableOpacity `
    height: 40px;
    width: 40px;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 30px;
    margin-left: 10px;
    background-color: #FFF;
    border-radius: 100px;
`

export const Header = styled.View `
    flex: 7; 
    justify-content: center; 
    align-items: center;
    background-color: #5807B8;
`

export const ContentCam = styled.View  `
    height: 195px; 
    flex: 1;
    border-radius: 1px; 
    border-left-width: 4px; 
    border-color: #fff;
`

export const Body = styled.View `
    height: 195px; 
    flex-direction: row; 
`

export const Space = styled.View `
    width: 20px; 
    background-color: #5807B8;
`

export const Footer = styled.View `
    flex: 5; 
    background-color: #5807B8;
`

export const NoAcessContent = styled.View `
    height: 195px; 
    flex: 1;
    border-top-left-radius: 4px;
    border-left-width: 4px; 
    border-color: #FFF;
    align-items: center; 
    justify-content: center;
    background-color: #FF3D00;
`

export const NoAcessText = styled.Text `
    font-size: 20px;
    color: #fff;
    font-weight: 600;
`

export const AwaitCamContent = styled.View `
    height: 195px; 
    flex: 1;
    border-top-left-radius: 3px;
    border-left-width: 4px; 
    border-color: #fff;
    align-items: center; 
    justify-content: center;
    background-color: #aaa;
`

export const AwaitCamText = styled.Text `
    font-size: 20px;
    color: #5807B8;
    font-weight: 600;
    margin-bottom: 10%;
`