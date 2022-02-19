import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../../../components/Button/indes';
import Camp from '../../../components/Camp';
import styles from './styles';

interface Props {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  inicialAmout?: number;
}

export default function Item({
  name,
  price,
  description,
  inicialAmout,
}: Props) {
  const [amout, setAmout] = useState(inicialAmout);
  const [finalPrice, setFinalPrice] = useState(price * inicialAmout);

  useEffect(() => {
    setFinalPrice(Number(price) * amout);
  }, [amout]);

  return (
    <>
      <View style={styles.informacao}>
        <Text style={styles.nome}>{name}</Text>
        <Text style={styles.descricao}>{description}</Text>
        <Text style={styles.preco}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </Text>
      </View>
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
        <Button title="Remover do Carrinho" action={() => {}} />
      </View>
      <View style={styles.divisor} />
    </>
  );
}
