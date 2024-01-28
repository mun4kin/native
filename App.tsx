import { StatusBar } from 'expo-status-bar';
import {type ImageURISource, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native'

const image: ImageURISource= {uri:'https://cdn1.flamp.ru/1063baf4e4ed9728e977c95676ca2783.jpg'};

export default function App(): JSX.Element{
  return (
    <>
      <ImageStyled source={image} resizeMode="contain"/>

        <StatusBar style="auto" />
    </>
  );
}

const ImageStyled= styled.Image`
  display:flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-size: contain;
`
const Main = styled.View`
  display: flex;

  align-items: center;
  justify-content: center;
`
