import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export interface FilterStyleProps {
    isActive?: boolean;
}

//A PRIMEIRA DECLARACAO APLICA A ESTILIZACAO APENA SE isActive FOR TRUE
export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
  `}
  
  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
`;

//A PRIMEIRA DECLARACAO APLICA A ESTILIZACAO APENA SE isActive FOR TRUE
export const Title = styled.Text`
${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}

  text-transform: uppercase;
`;