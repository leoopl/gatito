import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Item from './Item';
import globalStyles from '../../styles';
import ScreenStandard from '../../components/ScreenStandard';

const services: Array<{
  id: number;
  name: string;
  price: number;
  description: string;
}> = [
  {
    id: 1,
    name: 'Banho',
    price: 79.9,
    description: 'NÃO DE BANHO NO SEU GATO, mas se precisar tamo aqui',
  },
  {
    id: 2,
    name: 'Vacina V4',
    price: 89.9,
    description: 'Uma dose da vacina V4',
  },
  {
    id: 3,
    name: 'Vacina Antirrabica',
    price: 99.9,
    description:
      'Uma dose da vacina antirrabica. Seu gato precisa de uma por ano.',
  },
];

export default function Services() {
  return (
    <>
        <FlatList
          data={services}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={({ id }) => String(id)}
        />
    </>
  )
}
