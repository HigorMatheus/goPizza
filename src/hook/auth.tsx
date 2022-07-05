import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import fireStore from '@react-native-firebase/firestore';

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};
type AuthContextData = {
  signIn: (props: SingInProps) => void;
  isLogging: boolean;
  user: User | null;
};
type AuthProviderProps = {
  children: ReactNode;
};
type SingInProps = {
  email: string;
  password: string;
};
const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLogging, setIsLogging] = useState(false);

  async function signIn({ email, password }: SingInProps): Promise<void> {
    if (!email || !password) {
      Alert.alert('Login', 'Informe o e-mail e a Senha ');
    } else {
      setIsLogging(true);

      auth()
        .signInWithEmailAndPassword(email, password)
        .then((account) => {
          fireStore()
            .collection('users')
            .doc(account.user.uid)
            .get()
            .then((profile) => {
              const { name, isAdmin } = profile.data() as User;
            });
        })
        .catch((error) => {
          const { code } = error;

          if (
            code === 'auth/user-not-found' ||
            code === 'auth/wrong-password'
          ) {
            Alert.alert('login', 'E-mail e/ou senha Inválida');
          } else {
            Alert.alert('login', 'Nao foi possível realizar o login ');
          }
        })
        .finally(() => {
          setIsLogging(false);
        });
    }
  }
  return (
    <AuthContext.Provider value={{ signIn, isLogging, user }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = (): AuthContextData => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
