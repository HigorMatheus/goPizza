import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import React from 'react';

import { Container } from './styles';

export function SignIn() {
  return (
    <Container>
      <Input
        placeholder="E-mail"
        typeStyle="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input
        placeholder="Senha"
        typeStyle="secondary"
        secureTextEntry
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Entrar" type="secondary" isLoading />
    </Container>
  );
}
