import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import globalStyles from '../../styles';

export default function ScreenStandard({ children }: any) {
  return(
    <SafeAreaView style={globalStyles.preencher}>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={globalStyles.preencher}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
