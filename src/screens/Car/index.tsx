import React from 'react';
import {
  FlatList
} from 'react-native';
import Item from './Item';
import ScreenStandard from '../../components/ScreenStandard';
import StatusCar from '../../components/StatusCar';

const services: Array<{
  id: number;
  name: string;
  price: number;
  description: string;
  inicialAmout: number;
}> = [
  {
    id: 1,
    name: 'Banho',
    price: 79.9,
    description: 'NÃO DE BANHO NO SEU GATO, mas se precisar tamo aqui',
    inicialAmout: 1,
  },
  {
    id: 2,
    name: 'Vacina V4',
    price: 89.9,
    description: 'Uma dose da vacina V4',
    inicialAmout: 2,
  },
  {
    id: 3,
    name: 'Vacina Antirrabica',
    price: 99.9,
    description:
      'Uma dose da vacina antirrabica. Seu gato precisa de uma por ano.',
    inicialAmout: 1,
  },
];

export default function Car() {
  const total = services.reduce((sum, {price, inicialAmout}) => sum + (price * inicialAmout), 0);

  return (
    <>
      <StatusCar total={total}/>
        <FlatList
          data={services}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={({ id }) => String(id)}
        />
    </>
  )
}
