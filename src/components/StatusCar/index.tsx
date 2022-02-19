import React from "react";
import { View, Text } from "react-native";
import Button from "../Button/indes";
import styles from "./styles";

export default function StatusCar({total}: any){
    return(
        <View style={styles.conteudo}>
            <View style={styles.total}>
                <Text style={styles.descricao}>Total do Carrinho: </Text> 
                <Text style={styles.valor}>{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    }).format(total)}
                </Text>           
            </View>
            <View style={styles.botao}>
                <Button title='Concluir Pedido' inverted />
            </View>
        </View>
    )
}