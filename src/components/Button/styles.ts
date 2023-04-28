import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

interface Props {
	type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  width: 100%;
  border-radius: 6px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
   ${({ theme }) => css`
    ${theme.FONT_SIZE.MD}px;
    ${theme.COLORS.WHITE};
    ${theme.FONT_FAMILY.BOLD};
   `}
`;