import { StatusBar } from 'expo-status-bar'

import styled from 'styled-components/native'
import React, { JSX } from 'react'
import { type ImageURISource } from 'react-native'

const image: ImageURISource = {
  uri: 'https://cdn1.flamp.ru/1063baf4e4ed9728e977c95676ca2783.jpg',
}

const AuthPage = (): JSX.Element => (
  <>
    <ImageStyled source={image} resizeMode='contain' />
    <StatusBar style='auto' />
  </>
)

const ImageStyled = styled.ImageBackground`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-size: contain;
`
export default AuthPage
