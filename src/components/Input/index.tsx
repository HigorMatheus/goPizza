import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TypeProps } from './styles';

type InputProps = TextInputProps & {
  typeStyle?: TypeProps;
};

export function Input({ typeStyle = 'primary', ...rest }: InputProps) {
  return <Container typeStyle={typeStyle} {...rest} />;
}
