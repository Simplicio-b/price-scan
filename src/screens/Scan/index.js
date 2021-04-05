import React, {useEffect, useState} from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'

// img
import ArrowLeftPurple from '../../assets/left-arrow-purple.png'

// components
import {
  Container,
  LogoTitle
} from '../../components'

import {
  ActivityIndicator,
  Image,
  StatusBar
} from 'react-native'

import {
  BtnBack,
  Header,
  Body,
  Footer,
  ContentCam,
  NoAcessContent,
  NoAcessText,
  Space,
  AwaitCamContent,
  AwaitCamText
} from './styles'

export default function Home({ navigation }) {

  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    navigation.navigate('ShowProduts', { data: data })
  }

  return (
    <Container bg="#5807B8">
      <BarCodeScanner 
        style={{ flex: 1 }} 
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <BtnBack onPress={() => navigation.navigate('Home')} >
          <Image source={ArrowLeftPurple} style={{ width: 22, height: 22 }} />
        </BtnBack>

        <Header>
          <LogoTitle cor="#FFF">PRICE SCAN </LogoTitle>
        </Header>

        <Body>

          <Space  />

          {hasPermission === null && (
            <AwaitCamContent>
              <AwaitCamText>Aguarde a camera ...</AwaitCamText>
              <ActivityIndicator color="#5807B8" size="large" />
            </AwaitCamContent>
          )}
          
          {hasPermission === false && (
            <NoAcessContent>
              <NoAcessText>No access to camera</NoAcessText>
            </NoAcessContent>
          )}



          { (hasPermission !== false && hasPermission !== null)  && (<ContentCam />)}

          <Space  />

        </Body>

        <Footer />
      </BarCodeScanner>
    </Container>
  )
}

