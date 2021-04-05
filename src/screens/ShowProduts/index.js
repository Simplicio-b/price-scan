import React, { useEffect, useState } from 'react'

// AXIOS
import axios from 'axios'

// components
import {
  View,
  Text,
  Image
} from 'react-native'

import {
  Container,
  LogoTitle,
  Btn,
  LblBnt
} from '../../components'

import {
  Header,
  Body,
  Content,
  ContentHeader,
  TextLbl,
  Footer,
  ContentTickets,
  Ticket,
  TicketText
} from './styles'

export default function WreiteCodBar({ navigation }) {
  
  const [dados, setDados] = useState(null)

  useEffect(() => {
    (async function(){
      try {
        const ean = navigation.state.params.data
        const { data } = await axios.get(`http://brasilapi.simplescontrole.com.br/mercadoria/consulta/?ean=${ean}&access-token=0K3oE4SfgSUPxQ3GbiSrVjz68YciENdH&_format=json`)
        setDados(data.return)
      }catch(err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <Container bg="#F5F5F5">
      <Header>
        <LogoTitle>PRICE SCAN</LogoTitle>
      </Header>

      <Body>
        <Content>
          <ContentHeader>

            <View style={{ height: 100, width: 100, backgroundColor: '#FFF', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={{ uri: dados ? dados.imagem_produto : ''  }} style={{ height: 100, width: 95 }} />
            </View>

            <TextLbl>{dados ? dados.ean : '...'}</TextLbl>
          </ContentHeader>

          <View style={{ flex: 7, paddingTop: 20 }}>

            <TextLbl style={{ textAlign: 'center', marginBottom: 15 }} >INFORMAÇÕES DO PRODUTO</TextLbl>

            <View style={{ flexDirection: 'row', marginBottom: 20 }} >
              <TextLbl>DESCRICAO: </TextLbl>
              <Text>{}</Text>
            </View>

            <ContentTickets>
              <Ticket>
                <TicketText>PREÇO BAIXO: {dados ? dados.preco_minimo : '...'} R$</TicketText>
              </Ticket>
              
              <Ticket bg='#00B897'>
                <TicketText>PREÇO MEDIO: {dados ? dados.preco_medio : '...'} R$</TicketText>
              </Ticket>

              <Ticket bg='#FF3D00'>
                <TicketText>PREÇO ALTO: {dados ? dados.preco_maximo : '...'} R$</TicketText>
              </Ticket>

            </ContentTickets>
            
          </View>

        </Content>
      </Body>

      <Footer>
        <Btn 
          style={{ elevation: 5, width: '48%', borderRadius: 4 }}
          bg="#FF3D00" 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Home')}
        >
          <LblBnt cor="#FFF" >HOME</LblBnt>
        </Btn>

        <Btn 
          style={{ elevation: 5, width: '48%', borderRadius: 4 }}
          bg="#5807B8" 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Scan')}
        >
          <LblBnt cor="#FFF" >CONTINUAR</LblBnt>
        </Btn>

      </Footer>
    </Container>
  )
}
