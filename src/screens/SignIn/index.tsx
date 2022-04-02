import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import brandImag from '@/assets/brand.png';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from './styles';

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Brand source={brandImag} />
          <Title>Login</Title>
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
          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha Senha</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button title="Entrar" type="secondary" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
