import { StyleSheet } from 'react-native';
import { cores } from '../../styles';

export default (small: boolean, inverted: boolean) =>
  StyleSheet.create({
    botao: {
      width: 140,
      paddingVertical: small ? 3 : 9,
      paddingHorizontal: 20,
      backgroundColor: inverted ? cores.laranja : cores.roxo,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    valor: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: inverted ? cores.roxo : cores.laranja,
    },
  });
