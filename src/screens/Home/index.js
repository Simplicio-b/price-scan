import { StatusBar } from 'expo-status-bar'
import React from 'react'

// components
import { Text, View } from 'react-native'
import {
  Container
} from '../../components'

export default function Home() {
  return (
    <Container bg="#F5F5F5">
      <Text>Homes</Text>
      <StatusBar style="auto" />
    </Container>
  )
}

