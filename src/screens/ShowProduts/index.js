import React from 'react'

// components
import {
  View,
  Text
} from 'react-native'


import {
  Container,
  LogoTitle,
  Btn
} from '../../components'

import {
  Header,
  Body,
  Content,
  ContentHeader,
  TextLbl,
  Footer
} from './styles'

export default function WreiteCodBar({ navigation }) {
  return (
    <Container bg="#F5F5F5">
      <Header>
        <LogoTitle>PRICE SCAN</LogoTitle>
      </Header>

      <Body>
        <Content>
          <ContentHeader>
            <View style={{ height: 100, width: 100, backgroundColor: '#DDD', borderRadius: 100 }} />
            <TextLbl>7896607100081</TextLbl>
          </ContentHeader>

          <View style={{ flex: 7, paddingTop: 20 }}>

            <TextLbl style={{ textAlign: 'center', marginBottom: 15 }} >INFORMAÇÕES DO PRODUTO</TextLbl>

            <View style={{ flexDirection: 'row', marginBottom: 20 }} >
              <TextLbl>DESCRICAO: </TextLbl>
              <Text>COCA-COLA LIFE GLASS</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'space-around' }} >
              <View style={{ height: 30, backgroundColor: '#909090', borderRadius: 4, elevation: 5 }} />
              <View style={{ height: 30, backgroundColor: '#00B897', borderRadius: 4, elevation: 5 }} />
              <View style={{ height: 30, backgroundColor: '#FF3D00', borderRadius: 4, elevation: 5 }} />
            </View>
            
          </View>

        </Content>
      </Body>

      <Footer>
        <Btn 
          style={{ elevation: 5, width: '48%', borderRadius: 4 }}
          bg="#FF3D00" 
          activeOpacity={0.8}
        />
        <Btn 
          style={{ elevation: 5, width: '48%', borderRadius: 4 }}
          bg="#5807B8" 
          activeOpacity={0.8}
        />
      </Footer>
    </Container>
  )
}
