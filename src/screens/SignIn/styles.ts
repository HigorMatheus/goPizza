import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => {
  return {
    colors: theme.COLORS.GRADIENT,
    start: { x: 0, y: 1 },
    end: { x: 0.5, y: 0.5 },
  };
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  flex: 1;
  background-color: #333;
`;
