import React, { useEffect, useState } from 'react'

// AXIOS
import axios from 'axios'

// components
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator
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
  ContentImgHeader,
  TextLbl,
  Footer,
  ContentTickets,
  Ticket,
  TicketText,

} from './styles'

export default function WreiteCodBar({ navigation }) {
  
  const [loading, setLoading] = useState(false)
  const [dados, setDados] = useState(null)

  useEffect(() => {
    (async function(){
      try {
        setLoading(true)
        const ean = navigation.state.params.data
        const { data } = await axios.get(`http://brasilapi.simplescontrole.com.br/mercadoria/consulta/?ean=${ean}&access-token={YOUR_TOKEN}&_format=json`)
        setDados(data.return)
        setLoading(false)

       if(data.return === undefined) {
        Alert.alert("Error!", "Algo inesperado aconteceu, tente novamente mais tarde!")
       }
       
      }catch(err) {
        setLoading(false)
        Alert.alert("Error!", "Algo inesperado aconteceu, tente novamente mais tarde!")
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

            <ContentImgHeader>
              {
                loading 
                ? (<ActivityIndicator size="large" color="#666" />)
                : (
                  <Image 
                    source={{ uri: dados ? dados.imagem_produto : null  }} 
                    style={{ height: 90, width: 85 }} 
                  />
                )
              }

            </ContentImgHeader>

            <TextLbl>
              {dados ? dados.ean : ''}
            </TextLbl>
          </ContentHeader>

          <View style={{ flex: 8, paddingTop: 15 }}>

            <TextLbl style={{ textAlign: 'center', marginBottom: 10 }} >INFORMAÇÕES DO PRODUTO</TextLbl>

            <View style={{ marginBottom: 15 }} >
              <TextLbl>DESCRICAO</TextLbl>
              <Text>{dados ? dados.nome : ''}</Text>
            </View>

            <ContentTickets>
              <Ticket>
                <TicketText>PREÇO BAIXO: {dados ? `${dados.preco_minimo} R$` : ''}</TicketText>
              </Ticket>
              
              <Ticket bg='#00B897'>
                <TicketText>PREÇO MEDIO: {dados ? `${dados.preco_medio} R$`: ''}</TicketText>
              </Ticket>

              <Ticket bg='#FF3D00'>
                <TicketText>PREÇO ALTO: {dados ? `${dados.preco_maximo} R$`: ''}</TicketText>
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
          <LblBnt cor="#FFF" >SCAN</LblBnt>
        </Btn>

      </Footer>
    </Container>
  )
}
