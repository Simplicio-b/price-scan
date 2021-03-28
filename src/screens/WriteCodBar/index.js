import React from 'react'

// icons
import IconLupa from '../../assets/lupa.png'
import ArrowLeft from '../../assets/arrow-left.png'

// components
import {
  Image
} from 'react-native'

import {
  Container,
  LogoTitle,
  Btn,
  Input
} from '../../components'

import {
  Header,
  Body,
  BtnBack
} from './styles'

export default function WreiteCodBar({ navigation }) {
  return (
    <Container bg="#F5F5F5">

      <BtnBack
        onPress={() => navigation.navigate('Home')}
      >
        <Image source={ArrowLeft} style={{ height: 20, width: 20 }} />
      </BtnBack>

      <Header>
        <LogoTitle>PRICE SCAN </LogoTitle>
      </Header>

      <Body>

        <Input 
          style={{ elevation: 1, marginBottom: 30  }} 
          placeholder="DIGITE O CODIGO DE BARRAS"
          placeholderColor="#DDD"
          keyboardType="numeric"
          autoFocus
        />

        <Btn 
          style={{
            elevation: 10,
          }}
          bg="#5807B8"
          activeOpacity={0.8}
        >
          <Image source={IconLupa} style={{ height: 26, width: 26 }} />
        </Btn>

      </Body>
    </Container>
  )
}
