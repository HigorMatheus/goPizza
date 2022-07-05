import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import brandImag from '@/assets/brand.png';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useAuth } from '@/hook/auth';
import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from './styles';

export function SignIn() {
  const { signIn, isLogging } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = () => {
    signIn({ email, password });
  };
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
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Senha"
            typeStyle="secondary"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
          />
          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha Senha</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button
            title="Entrar"
            type="secondary"
            onPress={handleSignIn}
            isLoading={isLogging}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
