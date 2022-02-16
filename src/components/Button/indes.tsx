import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styleFunction from './styles';

interface Props{
    title: string,
    action: any,
    small?: boolean,
    inverted?: boolean,
}

export default function Button({small = false, inverted = false, title, action}: Props) {
    const styleStandard = styleFunction(small, inverted);
    return (
        <TouchableOpacity onPress={action} style={styleStandard.botao}>
            <Text style={styleStandard.valor}>{title}</Text>
        </TouchableOpacity>
    )
}