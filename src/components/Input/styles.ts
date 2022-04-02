import { TextInput } from 'react-native';

import styled, { css } from 'styled-components/native';

export type TypeProps = 'primary' | 'secondary';

type Props = {
  typeStyle: TypeProps;
};

export const Container = styled(TextInput).attrs<Props>(
  ({ theme, typeStyle }) => ({
    placeholderTextColor:
      typeStyle === 'primary'
        ? theme.COLORS.SECONDARY_900
        : theme.COLORS.PRIMARY_50,
  }),
)<Props>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;
  ${({ theme, typeStyle }) => css`
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid ${theme.COLORS.SHAPE};
    color: ${typeStyle === 'primary'
      ? theme.COLORS.SECONDARY_900
      : theme.COLORS.TITLE};
  `}
`;
