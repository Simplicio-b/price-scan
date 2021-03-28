import React from 'react'

// components
import {
  Container,
  LogoTitle,
  Btn,
  LblBnt
} from '../../components'

import {
  Header,
  Body
} from './styles'

export default function Home({ navigation }) {
  return (
    <Container bg="#F5F5F5">

      <Header>
        <LogoTitle>PRICE SCAN </LogoTitle>
      </Header>

      <Body>

        <Btn 
          style={{
            elevation: 10,
            marginBottom: 30 
          }}
          bg="#5807B8"
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Scan')}
        >
          <LblBnt cor="#fff">
            SCAN
          </LblBnt>
        </Btn>


        <Btn  
          style={{
            elevation: 10,
          }}
          bg="#5807B8"
          activeOpacity={0.8}
          onPress={() => navigation.navigate('WriteCodBar')}
        >
          <LblBnt cor="#FFF">
            CODIGO DE BARRAS
          </LblBnt>
        </Btn>

      </Body>
    </Container>
  )
}

