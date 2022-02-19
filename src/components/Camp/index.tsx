import React from 'react';
import { TextInput } from 'react-native';
import stylesStandard from './styles';

interface Props {
  amout: number;
  setAmout: React.Dispatch<React.SetStateAction<number>>;
  styles: any;
}

export default function Camp({ amout, setAmout, styles }: Props) {
  const numberToString: string = String(amout);
  return (
    <TextInput
      style={[stylesStandard.campo, styles]}
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={newValue =>
        isNaN(Number(newValue)) ? setAmout(amout) : setAmout(Number(newValue))
      }
      value={numberToString}
    />
  );
}
