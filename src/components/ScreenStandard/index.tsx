import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import globalStyles, {cores} from '../../styles';
import styles from './styles'

export default function ScreenStandard({ children }: any) {
  return(
    <>
      <SafeAreaView style={styles.ajusteTela}>
        <StatusBar backgroundColor={cores.roxo} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={globalStyles.preencher}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={styles.ajusteTelaBaixo}/>
    </>
  )
}
