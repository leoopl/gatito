import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Button from '../../../components/Button/indes';
import Camp from '../../../components/Camp';
import styles from './styles';

interface Props {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
}

export default function Item({ name, price, description }: Props) {
  const [amout, setAmout] = useState(1);
  const [finalPrice, setFinalPrice] = useState(amout);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    setFinalPrice(Number(price) * amout);
  }, [amout]);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setExpand(!expand);
          setAmout(1);
        }}
        style={styles.informacao}
      >
        <Text style={styles.nome}>{name}</Text>
        <Text style={styles.descricao}>{description}</Text>
        <Text style={styles.preco}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </Text>
      </TouchableOpacity>
      {expand && (
        <View style={styles.carrinho}>
          <View>
            <View style={styles.valor}>
              <Text style={styles.descricao}>Quantidade: </Text>
              <Camp
                styles={styles.quantidade}
                amout={amout}
                setAmout={setAmout}
              />
            </View>
            <View style={styles.valor}>
              <Text style={styles.descricao}>Preço Total: </Text>
              <Text style={styles.preco}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(finalPrice)}
              </Text>
            </View>
          </View>
          <Button title="Adicionar ao Carrinho" action={() => {}} />
        </View>
      )}
      <View style={styles.divisor} />
    </>
  );
}
